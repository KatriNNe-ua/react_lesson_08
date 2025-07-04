function TeacherCard({teacher, onSelect, isSelect}) {
	return (
    <div className="card">
      <div className="card__img">
        <img src={teacher.photo} alt="photo" />
      </div>
      <div className="card__inner">
        <div className="card__name">{teacher.name}</div>
        <div className="card__subject">
          Предмет:
          <span> {teacher.subject}</span>
        </div>
      </div>
      <div>
        {onSelect ? (
          <button className={`btn  ${isSelect ? "btn__main" : "btn-blue"}`} onClick={() => onSelect(teacher.id)}>
            {isSelect ? "Вибрано" : "Вибрати на збори"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default TeacherCard;