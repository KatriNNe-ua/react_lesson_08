import { useNavigate } from "react-router";
import frontRoutes from "../routes/frontRoutes";

function GoHomeButton() {
	const navigate = useNavigate()
	function goHome(){
		navigate(frontRoutes.navigate.home)
	}
	return (
    <button className="btn__home btn" onClick={goHome}>
      На головну
    </button>
  );
}

export default GoHomeButton;