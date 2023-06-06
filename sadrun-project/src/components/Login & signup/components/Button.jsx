
const Button = ({ type, variant, className, id, onClick, children }) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        variant={variant}
        className={className}
        id={id}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
