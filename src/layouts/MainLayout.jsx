import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
	return ( 
		<>
		<Header/>
		<main>
			<Outlet/>
		</main>
		<Footer/>
		</>
	 );
}

export default MainLayout;