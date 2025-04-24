const Book = ({ book: { img, title, author }, number }) => {
  console.log(number);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={null}>click me</button>
      <h4 style={inlineHeadingStyles}>{author}</h4>
      <span className="number">{"#" + (number + 1)}</span>
    </article>
  );
};

const inlineHeadingStyles = {
  color: "#200d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

export default Book;
