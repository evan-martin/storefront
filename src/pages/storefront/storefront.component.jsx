import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import Collection from "../../components/collection/collection.component";
import Container from '@mui/material/Container';
import BasicBreadcrumbs from "../../components/breadcrumb/breadcrumb";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./storefront.styles.scss";

const StoreFront = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title } = collection;

  return (
    <div >
      <div className="shop-banner">
        <div className="shop-title-background">
          <h1 className="shop-title">{title}</h1>
        </div>
      </div>   
      <Container maxWidth="lg" >
      <BasicBreadcrumbs title={title}/>
      <Collection collection={collection} />
      </Container>
    </div>
  );
};

export default StoreFront;
