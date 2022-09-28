import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {originals,actions,   comedy,romance,documentaries, horror,} from "./urls";


function App() {
	return (
		<div>
			<NavBar />
			<Banner />
			<RowPost url={originals} title="Netflix Originals"/>
			<RowPost url={actions} title="Action" isSmall/>
			<RowPost url={comedy} title="Comedy" isSmall />
			<RowPost url={romance} title="Romance" isSmall />
			<RowPost url={horror} title="Horror" isSmall />
			<RowPost url={documentaries} title="Documentaries" isSmall />
			<RowPost url={actions} title="Action" isSmall />
		</div>
	);
}

export default App;