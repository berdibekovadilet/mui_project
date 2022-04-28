import { Add as AddIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  Modal,
  Tooltip,
  Typography,
  styled,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Add = () => {
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    padding: "10px",
  }));
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Open"
        sx={{ position: "fixed", bottom: 20, left: 20 }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
            />
            <Typography variant="h6" fontWeight={100}>
              Amily Cena
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="What's new"
            variant="standard"
          />
        </Box>
      </Modal>
    </>
  );
};

export default Add;
