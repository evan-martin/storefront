import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom'

import "./breadcrumb.scss"

const BasicBreadcrumbs = ({ title}) => {
  return (
    <div className="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" style={{ textDecoration: "none", color:"black"}}>
          Collections
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs