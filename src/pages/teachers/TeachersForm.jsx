import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useTeachersApi from "../../hooks/useTeachersApi";
import frontRoutes from "../../routes/frontRoutes";

function TeachersForm() {
  const [teacher, setTeacher] = useState({
    id: "",
    name: "",
    subject: "",
    photo: "",
  });
  const {
    data,
    isLoading,
    error,
    fetchTeacherId,
    postNewTeacher,
    updateTeacher,
  } = useTeachersApi();
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate()
  //================================================
  useEffect(() => {
    if (id) {
      fetchTeacherId(id);
    }
  }, [fetchTeacherId, id]);

  useEffect(() => {
    if (!isLoading && data?.id) {
      setTeacher(data);
    }
  }, [data, isLoading]);

  //=================================================
  function handleChange(e) {
    setTeacher((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  //==============================================
  function cancel() {
    if (isEditing && data?.id) {
      setTeacher(data);
    } else {
      setTeacher({
        id: "",
        name: "",
        subject: "",
        photo: "",
      });
    }
  }
  //===============================================
  function handleSubmit(e) {
    e.preventDefault();
    const img = teacher.photo === "" ? "./photo.png" : teacher.photo;

    if (isEditing) {
		 updateTeacher(id, teacher)
		
    } else {
      postNewTeacher({ ...teacher, id: new Date().getTime(), photo: img });
      setTeacher({
        id: "",
        name: "",
        subject: "",
        photo: "",
      });
    }
	navigate(frontRoutes.navigate.teachers.index, {
    state: { updated: true },
  });
  }
  //===============================================
let content
  if (isLoading) content = <div className="loader"></div>;
  else if (error) content = <div>error</div>;
  else
    content = (
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <div className="form__item">
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            placeholder="Введіть ім'я вчителя"
            id="name"
            name="name"
            value={teacher.name}
            onChange={handleChange}
          />
        </div>
        <div className="form__item">
          <label htmlFor="subject">Предмет:</label>
          <input
            type="text"
            placeholder="Введіть предмет викладання"
            id="subject"
            name="subject"
            value={teacher.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form__item">
          <label htmlFor="photo">Фото URL (необов'язково):</label>
          <input
            type="text"
            placeholder="Введіть URL фотографії"
            id="photo"
            name="photo"
            value={teacher.photo}
            onChange={handleChange}
          />
        </div>
        <div className="form__btns">
          <button
            className="btn btn__main"
            type="submit"
            disabled={teacher.name === "" || teacher.subject === ""}
          >
            {isEditing ? "Оновити вчителя" : "Додати вчителя"}
          </button>
          <button onClick={cancel} className="btn btn-grey" type="button">
            Скасувати
          </button>
        </div>
      </form>
    );
  //===============================================
  return (
    <div className="form">
      <div className="form__container">
        <h1 className="form__title">
          {isEditing ? "Редагувати вчителя" : "Додати нового вчителя"}
        </h1>
       {content}
      </div>
    </div>
  );
}

export default TeachersForm;
