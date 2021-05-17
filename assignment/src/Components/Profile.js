import { Avatar, Button, Card, CardContent, Divider, Grid, InputLabel, Paper, TextField } from '@material-ui/core';
import '../CSS/Profile.css';
import img from '../images/avatar.jpg'
import Nav from './Nav';

export default function Profile() {

    return (
        <>
            <div className="ProfileBackground">
                <Nav />
                <Card />
                <Card className="FormBackground">
                    <CardContent>
                        <form>
                            <div style={{ display: "flex" }}>
                                <Grid item xs={6}>
                                    <Avatar style={{ height: 150, width: 150, marginTop: "60%" }} src={img}></Avatar></Grid>
                                <Grid item xs={6} style={{ marginTop: "10%" }}>
                                    <InputLabel>Username</InputLabel>
                                    <TextField></TextField>
                                    <br /><br />
                                    <InputLabel>Email</InputLabel>
                                    <TextField></TextField><br /><br />
                                    <InputLabel>Contact number</InputLabel>
                                    <TextField></TextField><br /><br />
                                    <div>
                                        <Button variant="contained" color="secondary">Save</Button>&nbsp;
                                        <Button variant="outlined" color="secondary">Cancel</Button>
                                    </div>
                                </Grid>
                            </div>
                        </form>

                    </CardContent>
                </Card>
            </div>
        </>
    );
}