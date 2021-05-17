import { Button, Card, CardContent, Divider, Grid, Paper, TextField, Typography, Input, ListItem, List } from '@material-ui/core';
import '../CSS/Home.css';
import React, { useState } from "react";
import Nav from './Nav';
import img from '../images/avatar.jpg';
import img2 from '../images/pregnantlady.jpg';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import "../CSS/ChatBox.css"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Home() {

  const [values, setValues] = useState({
    CommunityChat: ["example 02", "example 03", "example 04", "example 05", "example 06"],
    privateChat: ["person 02", "person 03", "person 04"]
  });
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState([
    { "state": "send", "content": "Hi there!.", "time": 2 },
    { "state": "received", "content": "Hello Nina :)", "time": 3 },
    { "state": "send", "content": "How is things.", "time": 4 },
    { "state": "recieved", "content": "Doing Great, and you?", "time": 5 },
    { "state": "recieved", "content": "Hey", "time": 1 },
  ]);

  const sortMessages = message.sort((a, b) => a.time - b.time);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="HomeBackground">
        <Nav />
        <div>
          <Modal
            className="box"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2>Person 01</h2><Divider /><br />
                <div>
                  {sortMessages.map((chat) => (
                    <>
                      {chat.state === "send" ? (
                        <div style={{ width: "100%" }}>
                          <Typography className="send">{chat.content}</Typography><br />
                        </div>
                      )
                        :
                        (
                          <div style={{ width: "100%" }}>
                            <Typography className="received">{chat.content}</Typography><br />
                          </div>
                        )}
                    </>
                  ))}
                </div>
                <div style={{ display: "flex" }}>
                  <TextField style={{ width: "100%" }} variant="outlined" placeHolder="type here" /> <Button variant="contained" color="primary">send</Button>
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
        <Paper style={{ display: "flex", width: "100%", height: "100vh", backgroundColor: "transparent", marginTop: "2%", position: "relative" }}>
          <Grid item xs={3} style={{ marginLeft: "2%", marginRight: "5%" }}>
            <Paper style={{ background: "#feceda", width: "100%", height: "40%", minHeight: "30%", marginRight: "100px", padding: 5, overflow: "auto" }}>
              <CardContent>
                <b><u>Community</u></b><br /><br />
                <ListItem >example 01</ListItem><Divider />
                <List>
                  {values.CommunityChat.map((chat, index) => (
                    <>
                      <ListItem key={index}>{chat}</ListItem><Divider />
                    </>
                  ))}
                </List>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item xs={6} style={{ marginRight: "5%" }}>
            <Card>
              <CardContent>
                <Typography>Create post</Typography>
                <TextField style={{ width: "100%" }} variant="outlined" color="secondary" /><br /><br />
                <Button variant="contained" color="secondary">Post</Button>&nbsp;
                  <Button variant="outlined">Clear</Button>&nbsp;
                  <Button
                  variant="outlined"
                  color="primary"
                  component="label"
                >
                  Upload File
                    <input
                    type="file"
                    hidden
                  />
                </Button>
              </CardContent>
            </Card><br />
            <Paper style={{ backgroundColor: "#feceda", width: "100%", height: "70%", padding: 10, boxShadow: "0px 5px 20px #566573", overflow: "auto" }}>
              <Card>
                <CardContent>
                  <Typography><b>Nina Dobrev</b></Typography><Divider></Divider>
                  <img src={img} style={{ height: "300px", width: "auto" }} /><br />
                  <div style={{ display: "flex" }}><Button variant="outlined" color="secondary"><FavoriteBorderIcon />Like</Button>&nbsp;&nbsp;
                      <Button variant="outlined" color="primary"><CommentIcon />Comment</Button>&nbsp;&nbsp;
                      <Button variant="outlined"><ShareIcon />Share</Button>
                  </div>
                </CardContent>
              </Card><br /><br />
              <Card>
                <CardContent>
                  <Typography><b>Someone</b></Typography><Divider></Divider>
                  <img src={img2} style={{ height: "300px", width: "auto" }} /><br />
                  <div style={{ display: "flex" }}>
                    <Button variant="outlined" color="secondary"><FavoriteBorderIcon />Like</Button>&nbsp;&nbsp;
                      <Button variant="outlined" color="primary"><CommentIcon />Comment</Button>&nbsp;&nbsp;
                      <Button variant="outlined"><ShareIcon />Share</Button>
                  </div>
                </CardContent>
              </Card><br /><br />
            </Paper>
          </Grid>
          <Grid item xs={3} style={{ marginRight: "2%" }}>
            <Card style={{ backgroundColor: "#feceda", width: "auto", height: "auto", overflow: "auto" }}>
              <CardContent>
                <b><u>Messages</u></b><br /><br />
                <List>
                  <ListItem onClick={handleOpen}>Person 01</ListItem><Divider />
                  {values.privateChat.map((Pchat, index) => (
                    <>
                      <ListItem key={index}>{Pchat}</ListItem><Divider />
                    </>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Paper>
      </div>
    </>
  );
}