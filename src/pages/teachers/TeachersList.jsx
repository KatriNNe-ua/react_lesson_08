import { useEffect, useState } from "react";
import useTeachersApi from "../../hooks/useTeachersApi";
import TeacherCard from "./components/teacherCard";
import { useLocation, useNavigate } from "react-router";
import frontRoutes from "../../routes/frontRoutes";

function TeachersList() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    data: teachersList,
    isLoading,
    error,
    fetchTeachers,
    deleteTeacher,
  } = useTeachersApi();
  const [selectedTeacherId, setSelectedTeacherId] = useState([]);
  //================================================================
  const count = selectedTeacherId.length;
  //=================================================================
  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers, deleteTeacher]);
  
  
useEffect(() => {
  if (location.state?.updated) {
    fetchTeachers();
    navigate(location.pathname, { replace: true });
  }
}, [location.state, fetchTeachers, navigate]);
  //================================================
  function onDelete(id) {
    deleteTeacher(id);
  }
  //=================================================
  function goToMeeting() {
    navigate(frontRoutes.navigate.meeting, {
      state: {
        teachers: teachersList.filter((teacher) =>
          selectedTeacherId.includes(teacher.id)
        ),
      },
    });
  }
  function goToFormAdd() {
    navigate(frontRoutes.navigate.teachers.add);
  }
  function goToFormEdit(id) {
    navigate(frontRoutes.navigate.teachers.edit(id));
  }
  //=======================================================================
  function onSelect(id) {
    if (selectedTeacherId.includes(id))
      setSelectedTeacherId((prev) => prev.filter((tId) => tId !== id));
    else setSelectedTeacherId((prev) => [...prev, id]);
  }
  //==========================================================================
  let content;
  if (isLoading) content = <div className="loader"></div>;
  else if (error) content = <div>error</div>;
  else
    content = (
      <div className="teacher__wrapper">
        {teachersList.map((teacher) => (
          <div key={teacher.id} className="teacher__item">
            {
              <TeacherCard
                teacher={teacher}
                onSelect={onSelect}
                isSelect={selectedTeacherId.includes(teacher.id)}
              />
            }
            <div className="teacher__btns">
              <button
                className="btn btn-blue"
                onClick={() => goToFormEdit(teacher.id)}
              >
                Редагувати
              </button>
              <button
                className="btn btn-red"
                onClick={() => onDelete(teacher.id)}
              >
                Видалити
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  //============================================================================
  return (
    <div className="teacher">
      <div className="teacher__container">
        <h1 className="teacher__title">Список вчителів</h1>
        <div className="teacher__btns">
          <button className="btn__main btn" onClick={goToFormAdd}>
            Додати нового вчителя
          </button>
          <button className="btn-blue btn" onClick={goToMeeting}>
            Викликати <span>{count ? count : 0} </span>
            вчителів на збори
          </button>
        </div>
        {content}
      </div>
    </div>
  );
}

export default TeachersList;
