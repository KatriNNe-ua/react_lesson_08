import { Outlet } from "react-router";
import GoHomeButton from "../components/GoHomeButton";

function SimpleLayout() {
	return (
    <div className="about">
      <div className="about__container">
        <Outlet />
        <GoHomeButton />
      </div>
    </div>
  );
}

export default SimpleLayout;