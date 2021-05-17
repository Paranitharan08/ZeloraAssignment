import { Button, Card, CardContent, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@material-ui/core";
import "../CSS/Login.css";
import { fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { React, useState } from "react";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import { useHistory } from "react-router";
import useAxios from 'axios-hooks'


const style = {
    text: {
        fontFamily: "copperplate",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        fontWeight: "bold"
    },
    textField: {
        width: "100%"
    },
    fadeInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
}

function Login() {

    const [values, setValues] = useState({
        username: "",
        password: "",
        message: "",
        showPassword: false,
        users:[]
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [{ data }] = useAxios(
        "http://localhost:8081/demo/data/?RT=1002"
    );
    

    const history = useHistory();
   
    const handleLogin = (e) => {
        data.push({
            "id": 0,
        "username": "user",
        "email": "someone@gmail.com",
        "phoneNumber": "0701472389",
        "password": "user"});
        console.log(data);
        data.map((row) => {
            (row.username === values.username && row.password === values.password) ? (
                history.push("/home")
            ) : (
                    setValues({ message: "Invalid Username or Password" })
                )
        })

        // console.log(data);
        // data.includes(username) ? 
    }




    return (
        <>
            <div className="MainBackground">
                <StyleRoot>
                    <form>
                        <div style={style.fadeInDown}>
                            <Card className="card"
                            >
                                <CardContent>
                                    <Typography variant="h5" style={style.text}>Login</Typography>
                                    <br />
                                    <InputLabel htmlFor="standard-adornment-usename">Username</InputLabel>
                                    <Input required value={values.username} onChange={handleChange('username')} id="standard-basic" label="Username" style={style.textField} />
                                    <br /><br />
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        required
                                        id="standard-adornment-password"
                                        style={style.textField}
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    /><br /><br />
                                    {values.message && (
                                        <Typography style={{ color: "red" }}>{values.message}</Typography>
                                    )}
                                    <Button variant="contained" color="secondary" style={style.textField} onClick={handleLogin}>Login</Button>
                                    <br /><br />
                                    <Typography style={style.text}>Don't have an account?. Register&nbsp;<a href="#">here</a></Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </form>
                </StyleRoot>
            </div>
        </>
    );
}

export default Login;