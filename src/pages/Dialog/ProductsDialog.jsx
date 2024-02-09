import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Row, Col } from "reactstrap";
import "./Dialog.css";
import urls from "../../services/Api";

export default function ProductDialog({ open, handleClose, getProductData }) {
  const [formValues, setFormValues] = useState({
    id: null, 
    name: "",
    createdAt: new Date().toISOString().slice(0, 10),
    price: null,
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const postProductData = async () => {
    const response = await urls.postProducts(formValues); 
    const { data } = response;
    console.log(data, "data here");
    getProductData();
    handleClose();
  };

  const generateId = () => {
    const latestId = null;
    return latestId ? latestId + 1 : 1;
  };

  useEffect(() => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      id: generateId(),
    }));
  }, []);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "600px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" className="product-dialog">
          Add Products
        </DialogTitle>
        <DialogContent>
          <br />
          <Row>
            <Col>
              <label>Product Name</label>
              <br />
              <input
                className="cust-input"
                name="name"
                onChange={handleChange}
                value={formValues.name}
              ></input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <label>Price</label>
              <br />
              <input
                className="cust-input"
                type="number"
                name="price"
                onChange={handleChange}
                value={formValues.price}
              ></input>
            </Col>
          </Row>
        </DialogContent>
        <DialogActions className="dialog-btn">
          <Button className="cust-btn" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="cust-btn" onClick={postProductData} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
