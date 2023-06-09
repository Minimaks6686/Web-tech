import NavBar from "../../Components/Navbar"
import "./DisciplinesPage.css"
import Lesson from "../../Components/Lesson"
import Container from "../../Components/Container"
import MyLessonsForm from "../../Components/MyLessonsForm"
import db from "../../db"
import React, { useEffect, useState } from 'react'


const DisciplinesPage = () => {
    const [lessons, setlessons] = useState([])

    useEffect(() => {
        getUsersOver()
    }, []);

    async function getUsersOver() {
        const lessons = await db`SELECT * FROM lesson`
        setlessons(lessons)
    }

    return (
        <>
            <NavBar></NavBar>

            <Container>
                <div className="grid">
                    {lessons.map((lesson) => (
                        <Lesson id={lesson.id} name={lesson.name} discription={lesson.description}/> 
                    ))}
                </div>
                <MyLessonsForm/>
            </Container>
        </>
    )

}


export default DisciplinesPage