import './Button.css'
//import Icon from '../Icon'


const Button = ({className, onClick, text}) => {
    return(
        <>
            <button className={className} onClick={onClick}>
                {text}
            </button>
        </>
    )
}


export default Button