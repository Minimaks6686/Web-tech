import './Button.css'
//import Icon from '../Icon'


const Button = ({className, onClick, text, id}) => {
    return(
        <>
            <button className={className} onClick={onClick} id={id}>
                {text}
            </button>
        </>
    )
}


export default Button