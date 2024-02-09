import React, { useMemo,useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Products.css"; // Import your custom CSS file
import ProductDialog from "./Dialog/ProductsDialog";
import urls from "../services/Api";

function Products() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState()

  useEffect(() => {
    getProductData();
  }, []);

//   const rowData = [
//     { id: "1", name: "Cargo", price: "100" },
//     { id: "2", name: "Container", price: "200" },
//     { id: "3", name: "Box", price: "50" },
//   ];

  const colDefs = [
    { headerName: "Product ID", field: "id", headerClass: "custom-header" },
    { headerName: "Product Name", field: "name", headerClass: "custom-header" },
    { headerName: "Price", field: "price", headerClass: "custom-header" },
    {headerName: "Date", field: "createdAt", headerClass: "custom-header"}
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getProductData = async() => {
    const response = await urls.getProducts()
    const {data} = response
    console.log(data,'res')
    setData(data)
  }

  return (
    <div>
      <h4>Product Sales</h4>
      <div className="btn-container">
        <button className="btn-mod" onClick={handleClickOpen}>
          + Add Product
        </button>
      </div>
      <ProductDialog open={open} handleClose={handleClose} getProductData={getProductData}/>
      <br />
      <div className="page-content">
        <div
          className="ag-theme-alpine custom-grid"
          style={{
            height: 700,
            width: 2000,
            border: "1px solid #333",
            borderRadius: "10px",
          }}
        >
          <AgGridReact
            rowData={data}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
