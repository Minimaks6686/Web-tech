import Button from "../Button";
import "./UserMenu.css";
import React, { useCallback, useState } from 'react';


const UserMenu = () => {
    const toggleMyLessonsForm = useCallback((e) => {
        e.preventDefault();
        var UserMenu = document.getElementById('MyLessonsForm');
        UserMenu.classList.toggle('show');
    }, []);

    return (
        <>
            <div className="UserMenudiv">
                <Button className="UserMenuButton" text="My profile"></Button>
                <Button className="UserMenuButton" text="My lessons 0" onClick={e => toggleMyLessonsForm(e)}></Button>
                <Button className="UserMenuButton" text="Out"></Button>
            </div>
        </>
    )
}

export default UserMenu