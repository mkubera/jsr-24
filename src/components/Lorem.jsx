import "./Lorem.css";

const Lorem = (props) => {
  const loremText = <p className={props.isRed ? "red" : ""}>{props.text}</p>;
  return (
    <>
      {/* <h2>{props.isRed ? "RED" : "notRED"}</h2> */}
      {loremText}
      {/* <p className={props.isRed ? "red" : ""}>{props.text}</p>; */}
    </>
  );
};

export default Lorem;
