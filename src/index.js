import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/51auv9MlRDL._AC_UL300_SR300,200_.jpg"
    alt="Kendime Düşünceler"
  />
);
const Title = () => <h2>Kendime Düşünceler</h2>;
const Author = () => <h4>Marcus Aurelius</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting></Greeting>);
root.render(<BookList />);
