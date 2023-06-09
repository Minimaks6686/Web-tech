import { Route } from "react-router-dom";
import Button from "../../Components/Button"
import NavBar from "../../Components/Navbar"
import "./testpage.css"
import UserMenu from "../../Components/UserMenu"
import MyLessonsForm from "../../Components/MyLessonsForm";
import Lesson from "../../Components/Lesson";


const TestPage = () => {
return (
    <>
        {/* <Button className="LogoButton"></Button>
        <br></br>
        <br></br>
        <Button className="UserButton"></Button>
        <br></br>
        <br></br>
        <Button className="NavBarButton" text="Disciplines"></Button>
        <br></br>
        <br></br>
        <div className="background">
            <NavBar></NavBar>
        </div> 
        <UserMenu></UserMenu>*/}
        <Lesson name="English" discription="discription"></Lesson>
    </>
)

}

export default TestPage