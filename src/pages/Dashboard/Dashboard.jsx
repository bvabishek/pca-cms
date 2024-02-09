import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "./Dashboard.css";
import urls from "../../services/Api";
import { IncomeChart,TotalProductsChart } from "../Charts/Chart";

function Dashboard() {
  const [incomeData, setIncomeData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const response = await urls.getProducts();
      const { data } = response;

      const currentDate = new Date().toISOString().split("T")[0];

      const productsOnCurrentDate = data.filter(
        (product) => product.createdAt === currentDate
      );
      const totalSum = productsOnCurrentDate.reduce((acc, product) => acc + parseFloat(product.price), 0);

      setTotalProducts(productsOnCurrentDate.length);
      
      setIncomeData(totalSum);
      setCurrentDate(currentDate);
      console.log("Total sum of prices for current date:", totalSum);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <div className="main-content" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <h4>Dashboard</h4>
      <Row className="mt-5">
        <Col lg="4">
          <Card className="cust-card">
            <CardBody>
              <h5 className="cust-card-title">Income</h5>
              <div className="cust-data mt-3">
                <p>Total Amount: ₹ {incomeData}</p>
                <p className="ms-4">Date: {currentDate}</p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="cust-card">
            <CardBody>
              <h5 className="cust-card-title">Product Sales</h5>
              <p className="cust-data mt-3" style={{color: 'orange'}}>Total product Sales: {totalProducts}</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="cust-card">
            <CardBody>
              <h5 className="cust-card-title">Coming soon..</h5>
              <p className="cust-data"></p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
      <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mb-4">Income Analysis</h4>
              <IncomeChart
                currentDate={currentDate}
                incomeData={incomeData}
              />
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mb-4">Product Sales Analysis</h4>
              <TotalProductsChart
                currentDate={currentDate}
                totalProducts={totalProducts}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
