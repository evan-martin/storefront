import React from "react";
import CollectionItemModal from "../collection-item-modal/collection-item-modal.component";

import './collection.styles.scss'

const Collection = ({ collection }) => {
  const { items } = collection;


  return (

      <div className="collection-page">
        {items.map((item) => (
          <div key={item.id}>
            <CollectionItemModal item={item} />
          </div>
        ))}
      </div>

  );
};

export default Collection;
