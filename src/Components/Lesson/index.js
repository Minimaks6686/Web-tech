import "./Lesson.css";
import Button from "../Button";
import db from "../../db";


const Lesson = ({name, discription, id}) => {
    async function AddToMyLesson({ id }) {
        try{
        const mylesson = await db`
          insert into mylesson
            (id)
          values
            (${ id })
        `} catch {
            console.log("Already added")
        }
      }
    return (
        <>
            <div className="Lesson">
                <p>{name}</p>
                <p>{discription}</p>
                <div className="divButton">
                    <Button id={id} className="AddToCurse" text="Add to my lessons" onClick={AddToMyLesson(this.id)}></Button>
                </div>
            </div>
        </>
    )
}

export default Lesson