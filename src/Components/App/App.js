import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Detail from "../Detail/Detail";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
