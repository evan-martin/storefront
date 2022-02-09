import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import './collection.styles.scss'

const Collection = ({ collection }) => {
  const { title, items } = collection;
  

  return (
    <div className="collection-page">
       <div className="items">
        {items.map((item) => (
          <div key={item.id}>
            <CollectionItem item={item}/>
          </div>
        ))}
      </div>
              
    </div>
  );
};

export default Collection;
