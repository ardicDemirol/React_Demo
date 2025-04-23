import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Marcus Aurelius",
    title: "Kendime Düşünceler",
    img: "./images/book1.png",
    id: 1,
  },
  {
    author: "Haemin Sunim",
    title: "The Things You Can See Only When You Slow Down",
    img: "./images/book2.png",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ book: { img, title, author, children } }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 style={inlineHeadingStyles}>{author}</h4>
      {children}
    </article>
  );
};

const inlineHeadingStyles = {
  color: "#200d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

// const Image = () => (
//   <img
//     src="https://images-eu.ssl-images-amazon.com/images/I/51auv9MlRDL._AC_UL300_SR300,200_.jpg"
//     alt="Kendime Düşünceler"
//   />
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// ----------------------------------------------------

// function Greeting() {
//   return <h2>My first component</h2>;
// }

// function Greeting() {
//   return React.createElement("h2", {}, "fuck world");
// }

// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <h3>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis
//           quisquam possimus voluptas numquam repellendus velit ea. Modi, odit,
//           accusamus repellat maiores officia pariatur hic repellendus optio
//           alias, ad aspernatur.
//         </h3>
//         <ul>
//           <li>
//             <a href="#"> fucking world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>Hellooooo</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// root.render(<Greeting></Greeting>);
