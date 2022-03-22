import React from 'react';
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Banner from "../../components/banner/banner.component"
import './homepage.styles.scss';

const HomePage = () => (
  <div>
    <Banner />
    <h2>Collections</h2>
    <Container maxWidth="lg">
      <div className="grid-container">
        <div className="grid-item" >
          <Link to="/women" style={{ textDecoration: "none" }}>
            <div id="woman-image" >
              <div className="grid-title-background">
                <h3 className="grid-title">Women</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/men" style={{ textDecoration: "none" }}>
            <div id="men-image" >
              <div className="grid-title-background">
                <h3 className="grid-title">Men</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid-item" >
          <Link to="/accessories" style={{ textDecoration: "none" }}>
            <div id="accessories-image" >
              <div className="grid-title-background">
                <h3 className="grid-title">Accessories</h3>
              </div>
            </div>
          </Link>
        </div>
        <div classname="nested-grid">
          <div className="grid-item" >
            <Link to="/footware" style={{ textDecoration: "none" }}>
              <div id="footware-image" >
                <div className="grid-title-background">
                  <h3 className="grid-title">Footware</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/sale" style={{ textDecoration: "none" }}>
              <div id="sale-image" >
                <div className="grid-title-background">
                  <h3 className="grid-title">Sale</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container >
  </div >
);

export default HomePage;
