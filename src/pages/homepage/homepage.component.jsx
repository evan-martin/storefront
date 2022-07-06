import React from 'react';
import Container from '@mui/material/Container';
import { HashLink } from 'react-router-hash-link';
import Banner from "../../components/banner/banner.component"
import './homepage.styles.scss';

const HomePage = () => (
  <div>
    <Banner />
    <h2>Collections</h2>
    <Container maxWidth="lg">
      <div className="grid-container">
        <div  >
          <HashLink className="grid-item" to="/women#top" style={{ textDecoration: "none" }}>
            <div id="woman-image" >
              <div className="grid-title-background">
                <h3 className="grid-title">Women</h3>
              </div>
            </div>
          </HashLink>
        </div>
        <div className="grid-item">
          <HashLink to="/men#top" style={{ textDecoration: "none" }}>
            <div id="men-image" >
              <div className="grid-title-background">
                <h3 className="grid-title">Men</h3>
              </div>
            </div>
          </HashLink>
        </div>
        <div className="grid-item" >
          <HashLink to="/accessories#top" style={{ textDecoration: "none" }}>
            <div id="accessories-image" >
              <div className="grid-title-background">
                <h3 className="grid-title">Accessories</h3>
              </div>
            </div>
          </HashLink>
        </div>
        <div className="nested-grid">
          <div className="grid-item" >
            <HashLink to="/footware#top" style={{ textDecoration: "none" }}>
              <div id="footware-image" >
                <div className="grid-title-background">
                  <h3 className="grid-title">Footware</h3>
                </div>
              </div>
            </HashLink>
          </div>
          <div className="grid-item">
            <HashLink to="/sale#top" style={{ textDecoration: "none" }}>
              <div id="sale-image" >
                <div className="grid-title-background">
                  <h3 className="grid-title">Sale</h3>
                </div>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </Container >
  </div >
);

export default HomePage;
