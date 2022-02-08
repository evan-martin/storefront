import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';


import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";



import './homepage.styles.scss';

const HomePage = ( {shops} ) => (
  <Grid container spacing={3} className="grid">
  {shops.map(({ id, title,
    bio,
    imageUrl,
    ownerPicUrl,
    reverse,
    history,
    linkUrl,
    owner,
    quote, }) => (

    <Grid item key={id}>
      <div className="grid-item">
        <Link to={`${linkUrl}`} style={{ textDecoration: "none" }}>
          <div className="card-image-container">
            <img className="media" src={imageUrl} alt={title} />
          </div>
          <div>
            <p> {quote} </p>
          </div>
          <div className="shop-title">
            <h3>{title}</h3>
          </div>
        </Link>

      </div>
    </Grid>
  ))}

</Grid>
);

const mapStateToProps = state => {
  const shops = selectDirectorySections(state);
  return { shops };

};

export default connect(mapStateToProps)(HomePage);
