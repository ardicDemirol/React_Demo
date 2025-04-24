import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book book={book} key={book.id} number={index} />;
        })}
      </section>
      <EventExamples />
    </>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    // console.log(e);
    console.log("handle form input");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault(); // We prevent this default behavior so page doesn't refresh
    console.log("form submitted");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit" onClick={handleFormSubmission}>
          submit
        </button>
        <div>
          <button onClick={handleButtonClick} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  );
};

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
