import React from "react";
import reactLogo from "./logo.svg";
import konamiLogo from "./konami-logo.svg";
import "./App.css";
import { useKonamiCode } from "./SecretCode/useKonamiCode";

function App() {
	const konami = useKonamiCode();
	const logo = konami ? konamiLogo : reactLogo;

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
