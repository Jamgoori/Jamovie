import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, {useState} from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    maxWidth: 700,
    height: 400,
    bgcolor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const MovieReview = ({ avatar_path, item }) => {
  const modal = useSelector((state) => state.modal.show);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button variant="text" color="error"  onClick={handleOpen} className="review_card_top">
        <article className="ReviewArticle">
            <div className="firstLine">
          <span>{item.author} </span>
          <span>
            {item.author_details.rating ? (
              <span>{item.author_details.rating} / 10</span>
            ) : (
              <span
                style={{
                  color: "gray",
                  fontSize: 8,
                }}
              >
                NOT SCORED
              </span>
            )}
          </span>
          <span> {item.updated_at.slice(0, 10)}</span>
          </div>
          <div className="review_content_section">
            <div className="review_content">{item.content}</div>
          </div>
        </article>
      </button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {item.author}
              </div>
              <div
                style={{
                  color: "red",
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                }}
              >
                {item.author_details.rating ? (
                  <p>{item.author_details.rating} / 10</p>
                ) : (
                  <p
                    style={{
                      color: "gray",
                      fontSize: 8,
                    }}
                  >
                    NOT SCORED
                  </p>
                )}
              </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="review_content_section_modal">
              <p className="review_content">{item.content}</p>
              <p style={{ opacity: "0.6", textAlign: "right" }}>
                {item.updated_at.slice(0, 10)}
              </p>
            </div>
          </Typography>
        </Box>


        </Modal>
    </>
  );
};

export default MovieReview;
