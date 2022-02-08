import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import Collection from "../../components/collection/collection.component";


import { selectCollection } from "../../redux/shop/shop.selectors";

import "./storefront.styles.scss";

const StoreFront = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, imageUrl, bio, items } = collection;

  return (
    <div >
      <h1>{title}</h1>
      <Collection collection = {collection} />
    </div>
  );
};

export default StoreFront;
