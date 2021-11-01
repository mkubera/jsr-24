const DystopianBook = ({ title, author, year, wikiUrl }) => {
  return (
    <li>
      <h3>
        {author} - {title} ({year})
      </h3>
      <p>
        <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
          more on wikipedia
        </a>
      </p>
    </li>
  );
};

export default DystopianBook;
