import React from "react";
import Card from "react-bootstrap/Card";

const Frase = (props) => {
  return (
    <Card className="w-75 my-3">
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={props.personajeProp.image} alt={props.personajeProp.character} className="w-75"  />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>{props.personajeProp.character}</Card.Title>
            <Card.Text>{props.personajeProp.quote}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;
