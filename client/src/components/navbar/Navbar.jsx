import React, { useEffect, useState } from "react";

import "./navbar.css";
import notif from "../../img/not.PNG";
import settings from "../../img/settings.svg";
import message from "../../img/message.svg";

function Navbar({ socket }) {
	const [notifications, setNotifications] = useState([]);
	useEffect(() => {
		socket.on("getNotification", (data) => {
			setNotifications((prev) => [...prev, data]);
		});
	}, [socket]);

	console.log(notifications);
	return (
		<div className="navbar">
			<span className="logo">Rauf SEZAR</span>
			<div className="icons">
				<div className="icon">
					<img src={notif} alt="" className="iconImg" />
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
