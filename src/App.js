import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ContactUs from "./components/ContactUs/ContactUs";
import Gallery from "./pages/Art-Gallery/Gallery";
import Perpose from "./pages/Perpose/Perpose";
import Services from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			{/* <Perpose /> */}
			{/* <Services /> */}
			{/* <Gallery /> */}
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
