import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate()

	const token = sessionStorage.getItem('token');

	const handlerLogout = async () => {
		sessionStorage.removeItem('token')
		navigate('/')
	}

	return (
		<nav className="navbar navbar-light ">
			
			<div className="container">
			{token ? <Link to="/">
					<span className="navbar-brand mb-0 h1 transparent">Back to home</span>
				</Link> : <Link to="/">
					<span className="navbar-brand mb-0 h1 transparent">Back to home</span>
				</Link>
				}
				
				{token ? 
				<div className="ml-auto">
					
				<button onClick={handlerLogout} className="btn btn-outline-warning">Log out</button>
			
		</div>



				 : <div className="ml-auto">
				 <Link to="/login">
					 <button className="btn btn-outline-warning">Log In</button>
				 </Link>
				 <Link to="/signup">
					 <button className="btn btn-warning">Sign up</button>
				 </Link>
			 </div>
				}
				

				
				
				
			</div>
		</nav>
	);
};
