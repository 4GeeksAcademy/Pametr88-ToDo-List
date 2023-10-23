import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [inputValor, setInputValor] = useState("");
	const [toDo, setToDo] = useState([]);
	const inputChange = (e) => {
		setInputValor(e.target.value);
	}
	const enterKeyPress = (e) => {
		if (e.key === "Enter"){
			setToDo ([...toDo, inputValor]);
			setInputValor ("");
		}
	}
	const removeToDo = (index) => {
		setToDo (toDo.filter ((_, i) => i !== index));
	}
	return (
		<div className="container">
			<h1>To Do List</h1>
			<div id="lista">
				<ul className="list-group">
					<li className="list-group-items">
						<input
							type="text"
							value = {inputValor}
							onChange={inputChange}
							onKeyDown={enterKeyPress}
							placeholder="What needs to be done?"></input>
					</li>
					<div className="container">
					{toDo.map((item, index) => (
						<li key={index}>
							 <div key={index} className="list-item">
      							<div className="list-item-content">
        							{item}
      							</div>
      							<div className="list-item-button">
        							<button id="boton" onClick={() => removeToDo(index)}>x</button>
      							</div>
    						</div>
						</li>
					))}</div>
				</ul>
			</div>
		</div>
	);
};

export default Home;
