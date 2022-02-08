import React from "react";
import { connect } from "react-redux";
import CollectionItemModal from "../collection-item-modal/collection-item-modal.component";


import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  return (
    
      <div className="collection-item">
        
        <CollectionItemModal item = {item}/>
      </div>
    
  );
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(CollectionItem);
