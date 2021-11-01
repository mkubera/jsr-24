const Input = ({ type = "text", onInputChange, placeholder }) => {
  return (
    <input type={type} onChange={onInputChange} placeholder={placeholder} />
    // <input type={type} onChange={(e) => console.log(e.target.value)} placeholder={placeholder} />
  );
};

export default Input;
