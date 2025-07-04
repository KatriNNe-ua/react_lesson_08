import { useNavigate } from "react-router";
import frontRoutes from "../routes/frontRoutes";

function Home() {
  const navigate = useNavigate();
  function goToTeacher() {
    navigate(frontRoutes.navigate.teachers.index);
  }
  function goToMeeting() {
	navigate(frontRoutes.navigate.meeting);
  }
  return (
    <div className="home">
      <div className="home__container">
        <hi className="home__title">Ласкаво просимо до Додатку "Вчителі"!</hi>
        <div className="home__text">
          <p>
            Цей додаток допоможе вам керувати інформaцією про вчителів,
            викликати їх на збори.
          </p>
        </div>
        <div className="home__btns">
          <button className="btn btn__main" onClick={goToTeacher}>
            Переглянути вчителів
          </button>
          <button className="btn btn__main" onClick={goToMeeting}>
            Переглянути список для зборів
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
