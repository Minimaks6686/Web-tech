import './Icon.css';

const Icon = ({ iconName, onClick }) => {
  
    return (
      <>
        <i className={`icon-${iconName}`} onClick={onClick}/>
      </>
    );
  };
  
  export default Icon;
  