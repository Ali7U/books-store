import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Main from "./components/Main";

import data from "./data";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const { books } = data;
  const [bookItem, setBookItem] = useState([]);

  const onAdd = (product) => {
    const exist = bookItem.find((x) => x.id === product.id);
    if (exist) {
      setBookItem(
        bookItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBookItem([...bookItem, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = bookItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setBookItem(bookItem.filter((x) => x.id !== product.id));
    } else {
      setBookItem(
        bookItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
  
          <Route
            path="/books"
            element={<Main books={books} onAdd={onAdd} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/cart"
            element={<Cart bookItem={bookItem} onAdd={onAdd}  onRemove={onRemove}/>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
