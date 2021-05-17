import React, { useState } from "react";
import { SwipeableDrawer } from '@material-ui/core';
import avatarimage from '../images/avatar.jpg'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppBar, Avatar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: "Brush Script MT",
        fontWeight: "bold"
    },
    list: {
        width: "250px",
    },
    fullList: {
        width: 'auto',
    },
}));


export default function Nav() {
    const [state, setState] = React.useState({
        left: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notification, setNotification] = useState(["**** Added you", "logged in from new device", "password changed"])


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory();


    return (
        <AppBar position="sticky" style={{ backgroundColor: "#F8BBD0", color: "black", boxShadow: "0px 5px 20px #566573" }}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon onClick={toggleDrawer("left", true)} />
                    <SwipeableDrawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        onOpen={toggleDrawer("left", true)}
                    >
                        <div
                            style={{ width: 200, padding: 30, height: "200px", background: "#F06292" }}
                            role="presentation"
                            onClick={toggleDrawer("left", false)}
                            onKeyDown={toggleDrawer("left", false)}
                        >
                            <Avatar alt="Remy Sharp" src={avatarimage} style={{ height: "200px", width: "200px", background: "#F06292" }} />
                            <Typography className="avatarName">Nina Dobrev</Typography><br />
                            <Button style={{ width: "100%" }}>Settings</Button>
                            <Button style={{ width: "100%" }}>Feedback</Button>
                            <Button style={{ width: "100%" }}>About</Button>
                        </div>
                    </SwipeableDrawer>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Mom to Be
          </Typography>
                <div>
                    <NotificationsActiveIcon onClick={handleClick} />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {notification.map((text, index) => (
                            <MenuItem onClick={handleClose} key={index}>{text}</MenuItem>
                        ))}

                    </Menu>
                </div>&nbsp;&nbsp;
          <Button onClick={() => { history.push("/profile") }}><AccountCircleIcon /></Button>&nbsp;&nbsp;
          <Button style={{ fontWeight: "bold" }} onClick={() => { history.push("/") }}>Logout</Button>
            </Toolbar>
        </AppBar>);
}