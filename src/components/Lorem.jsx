import "./Lorem.css";

import Counter from "./Counter";

const Lorem = ({ text, isRed }) => {
  const loremText = <p className={isRed ? "red" : ""}>{text}</p>;
  return (
    <>
      {/* <h2>{isRed ? "RED" : "notRED"}</h2> */}
      {loremText}

      {/* CONDITIONAL RENDERING */}
      <p style={{ color: isRed ? "red" : "#fff" }}>hello</p>
      {/* <p className={isRed ? "red" : ""}>{text}</p>; */}
      <Counter start={3} />
    </>
  );
};

export default Lorem;
