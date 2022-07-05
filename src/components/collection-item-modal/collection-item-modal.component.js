import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item-modal.styles.scss";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const CollectionItemModal = ({ item, addItem }) => {
  const { name, price, imageUrl, description } = item;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <div className="collection-item" onClick={handleOpen}>
        <img className="image" src={imageUrl} />
        <div className="item-name">
          <p>{name} | {price} </p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal">
            <img className="modal-image" src={imageUrl} />
            <div className="title-bar">
              <h3>{name}</h3>
              <h3>$ {price}</h3>
            </div>
            <p>
              {description}
            </p>

            <div className="button-bar">
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                onClick={() => {
                  setOpen(false);
                  addItem(item);
                }}
              >Add To Cart</Button>
              <Button
                startIcon={<CloseIcon />}
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setOpen(false);
                }}>Close </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>

  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItemModal);
