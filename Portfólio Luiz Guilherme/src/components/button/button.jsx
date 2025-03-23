
//STYLES    
import "./button.css";

function Button({buttonStyle, children, ...props}) {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
