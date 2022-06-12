import React from "react";

import "./navbar.css";
import notification from "../../img/not.PNG";
import settings from "../../img/settings.svg";
import message from "../../img/message.svg";

function Navbar() {
	return (
		<div className="navbar">
			<span className="logo">Rauf SEZAR</span>
			<div className="icons">
				<div className="icon">
					<img src={notification} alt="" className="iconImg" />
					<div className="counter">2</div>
				</div>
				<div className="icon">
					<img src={message} alt="" className="iconImg" />
					<div className="counter">2</div>
				</div>
				<div className="icon">
					<img src={settings} alt="" className="iconImg" />
					<div className="counter">2</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
