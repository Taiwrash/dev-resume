// import logo from './logo.svg';
// import './App.css';
import { React, useEffect, useState } from "react";
import {
  Pagination,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import "./style.css";
import data from "./data.json";

function App() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});

  useEffect(() => {
    setTotalPages(Math.ceil(data.details.length / 15));
    setItems(data.details.slice((page - 1) * 15, page * 15));
  }, [page]);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: "100px",
      behavior: "smooth",
    });
  };

  const handleCardClick = (item) => {
    setModalItem(item);
    setOpen(true);
    console.log(item);
  };

  const handleClose = () => {
    setOpen(false);
    setModalItem({});
  };

  return (
    <div className="App">
      {/* <h1>Dev Resume</h1> */}
      <div className="header">
        <div className="inner-header">
          <div className="logo">
            <img src="/icons/dev-resume-logo.svg" alt="" />
          </div>
          <h3>
            Welcome to an <span> Open Source Project</span> for Beginner
          </h3>
          <p>
            This is aim at helping everyone to learn, build and contribute to
            open source. This is for everyone ranging from designers, developers
            and content creators.
          </p>
          <a
            className="contributor"
            href="https://github.com/Taiwrash/dev-resume/blob/master/README.md">
            Become a Contributor
          </a>
        </div>
      </div>
      <div className="search">
        <input type="search" placeholder="Search for a contributor..." />
      </div>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        flexWrap={"wrap"}
        justifyContent="space-evenly">
        {items.map((item) => {
          return (
            <Card
              sx={{
                width: { xs: "90%", md: "30%" },
                margin: "1rem auto",
                backgroundColor: "#a09bb6",
              }}
              key={item.id}>
              <CardHeader title={item.name} />
              <CardActionArea
                onClick={(event, cardItem = item) => {
                  // console.log(cardItem);
                  handleCardClick(cardItem);
                }}>
                <div style={{ width: "60%", margin: "auto", height: "18rem" }}>
                  {item.imageName ? (
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={`images/${item.imageName}`}
                    />
                  ) : (
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={`images/sri.png`}
                    />
                  )}
                </div>
                <CardContent>
                  <Typography variant="h6" component="h6">
                    {item.role}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.about}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
      <Pagination count={totalPages} onChange={handleChange} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            bgcolor: "#302d3a",
            border: "2px solid #000",
            borderRadius: "1rem",
            boxShadow: 24,
            p: 4,
          }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalItem.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalItem.role}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalItem.about}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
