import "./NavBar.css"
import Button from "../Button";
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from "../Container";
import Icon from "../Icon";

const Navbar = () => {

    const toggleDropDown = useCallback((e) => {
        e.preventDefault();
        const NavBar = document.getElementById('NavBar');
        NavBar.classList.toggle('show');
    }, []);

    return(
        <>
            <div className="NavBar">
                <Container>
                    <div className="in-container">

                        <Button className="LogoButton"></Button>

                        <Icon iconName="menu" onClick={e => toggleDropDown(e)}/>
                        <div className="in-navbar">
                            <div className="Disciplines">
                                <Button className="NavBarButton" text="Disciplines"></Button>
                            
                                <Button className="NavBarButton" text="Feedback"></Button>
                            
                                <Button className="NavBarButton" text="Contact"></Button>
                            </div>
                            <div className="User">
                                <Button className="UserButton"></Button>
                            </div>
                        </div>

                        <div id="NavBar" className="in-menu">   
                            <div className="User">
                                <Button className="UserButton"></Button>
                            </div>
                            <div className="Disciplines">
                                <Button className="NavBarButton" text="Disciplines"></Button>
                            
                                <Button className="NavBarButton" text="Feedback"></Button>
                            
                                <Button className="NavBarButton" text="Contact"></Button>
                            </div>       
                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Navbar