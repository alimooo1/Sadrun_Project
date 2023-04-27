
const Button = ({ type, variant, className, id, onClick, children }) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        variant={variant}
        className={className}
        id={id}
        onClick={onclick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
