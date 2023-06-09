import "./NavBar.css"
import Button from "../Button";
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from "../Container";
import Icon from "../Icon";
import UserMenu from "../UserMenu";

const Navbar = () => {

    const toggleDropDown = useCallback((e) => {
        e.preventDefault();
        const NavBar = document.getElementById('NavBar');
        NavBar.classList.toggle('show');
    }, []);

    const toggleUserMenu = useCallback((e) => {
        e.preventDefault();
        var UserMenu = document.getElementById('UserMenu');
        UserMenu.classList.toggle('show');
        UserMenu = document.getElementById('UserMenu1');
        UserMenu.classList.toggle('show');
    }, []);

    return (
        <>
            <div className="NavBar">
                <Container>
                    <div className="in-container">
                        <Link to="/home">
                            <Button className="LogoButton"></Button>
                        </Link>

                        <Icon iconName="menu" onClick={e => toggleDropDown(e)} />
                        <div className="in-navbar">
                            <div className="Disciplines">
                                <Link to="/disciplines">
                                    <Button className="NavBarButton" text="Disciplines"/>
                                </Link>

                                <Link to="/feedback">
                                    <Button className="NavBarButton" text="Feedback"/>
                                </Link>

                                <Link to="/contact">
                                    <Button className="NavBarButton" text="Contact"/>
                                </Link>
                            </div>
                            <div className="User">
                                <Button className="UserButton" onClick={e => toggleUserMenu(e)}/>
                                <div id="UserMenu" className="user-menu">
                                    <UserMenu/>
                                </div>
                            </div>
                        </div>

                        <div id="NavBar" className="in-menu">
                            <div className="User">
                                <Button className="UserButton" onClick={e => toggleUserMenu(e)}/>
                                <div id="UserMenu1" className="user-in-menu">
                                    <UserMenu/>
                                </div>
                            </div>
                            <div className="Disciplines">
                                <Link to="/disciplines">
                                    <Button className="NavBarButton" text="Disciplines"/>
                                </Link>

                                <Link to="/feedback">
                                    <Button className="NavBarButton" text="Feedback"/>
                                </Link>

                                <Link to="/contact">
                                    <Button className="NavBarButton" text="Contact"/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </Container >
            </div >
        </>
    )
}

export default Navbar