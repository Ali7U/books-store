import React from "react";
import Bookss from "./Bookss";

function Main(props) {
  const { books, onAdd } = props;
  return (
    <main>
      <h2>Learn from the best javascript books</h2>
      <div className="books">
        {books.map((product) => (
          <Bookss product={product} key={product.id} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}

export default Main;
