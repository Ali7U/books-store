import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// GiBookshelf;
function Bookss(props) {
  const { product, onAdd } = props;
  
  return (
    <Card style={{ width: "18rem", marginTop: "10px" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>
          <h3>{product.bkName}</h3>
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
        <div>${product.price}</div>
        <Button onClick={() => onAdd(product)} variant="primary">
          Add to card
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Bookss;
/*
    <div className="proBooks">
      {/* <img src={product.image} alt={product.bkName} className="small" /> */
//   <h3>{product.bkName}</h3>
//   <div>
//     <p>{product.price}</p>
//   </div>
// </div>
