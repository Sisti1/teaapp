// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElement";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
                <NavLink to="/" >
						Home
					</NavLink>
					<NavLink to="/about" >
						About
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
                <NavLink to="/cart" >
					Cart
					</NavLink>
				<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
                
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
