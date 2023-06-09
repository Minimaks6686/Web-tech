import Button from "../Button";
import "./MyLessonsForm.css";
import React, { useCallback, useState } from 'react';


const MyLessonsForm = () => {
    const [mylessons, setmylessons] = useState([])

    const toggleMyLessonsForm = useCallback((e) => {
        e.preventDefault();
        var UserMenu = document.getElementById('MyLessonsForm');
        UserMenu.classList.toggle('show');
    }, []);

    async function getUsersOver() {
        const mylessons = await db`SELECT * FROM mylessons`
        setmylessons(lessons)
    }

    return (
        <>
            <div id="MyLessonsForm" className="MyLessonsForm">
                    <Button text="X" className="exitButton" onClick={e => toggleMyLessonsForm(e)}/>
                    <div></div>
            </div>
        </>
    )
}

export default MyLessonsForm