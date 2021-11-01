import DystopianBook from "./DystopianBook";

const DystopianBooks = ({ books, isOrdered }) => {
  const renderedBooks = books.map((book) => (
    <DystopianBook key={book.id} {...book} />
  ));
  let TagName;
  // return isOrdered ? <ol>{renderedBooks}</ol> : <ul>{renderedBooks}</ul>;
  if (isOrdered) {
    TagName = "ol";
  } else {
    TagName = "ul";
  }

  return (
    <TagName>
      {[1, 2, 3].map((li, key) => (
        <li key={key}>{li}</li>
      ))}
    </TagName>
  );
};

export default DystopianBooks;
