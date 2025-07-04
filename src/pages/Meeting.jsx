import { useLocation, useNavigate } from "react-router";
import TeacherCard from "./teachers/components/teacherCard";
import frontRoutes from "../routes/frontRoutes";

function Meeting() {
  const { state } = useLocation();
  const navigate = useNavigate();
  //=========================================
  function goToTeachers() {
    navigate(frontRoutes.navigate.teachers.index);
  }
  //===================================
  let content;
  if (state?.teachers)
    content = (
      <div className="teacher__wrapper">
        {state.teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    );
  else content = <div>🤔 Учасники не обрані</div>;
  return (
    <div className="meeting">
      <div className="meeting__container">
        <h1 className="meeting__title">Учасники зборів</h1>
        <div className="meeting__info">
          Список вчителів ({state?.teachers ? state.teachers.length : 0}) для
          виклику на збори:
        </div>
        {content}
        <button className="btn btn__home" onClick={goToTeachers}>
          Повернутися до списку вчителів
        </button>
      </div>
    </div>
  );
}

export default Meeting;
