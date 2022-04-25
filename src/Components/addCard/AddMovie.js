import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./addMovie.css";

function AddMovie({ addToList }) {
  const [show, setShow] = useState(false);
  const [inputFields, setInputFields] = useState({
    title: "",
    posterURL: "",
    rating: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleClose();
    addToList(inputFields);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputFields((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  return (
    <>
      <Button
        style={{
          borderRadius: "25px",
          width: "90%",
          height: "90%", 
          margin: "6%",            
        }} 
        className="movieCard"
        variant="outline-warning"
        onClick={() => handleShow()}
      >
        <span className="addSpan">
          <i className="fa-solid fa-plus"></i>
        </span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                //   value={inputFields.title}
                name="title"
              />
            </Form.Group>
           
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL movie poster</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                name="posterURL"
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>rating</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                name="rating"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClick()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
