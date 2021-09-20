import React from "react";
import {Container, AppBar, Typography, Grow} from "@material-ui/core";

import memories from "./image/memories.jpeg";
import HomeDisplay from "./components/homeDisplay.js";
import  useStyles  from "./styles.js";


const App = () =>{
    const classes = useStyles();
    return(
        <Container maxWidth="lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography className = {classes.heading} variant="h2" align="center">Memories</Typography>
                <img className = {classes.image} src={memories} alt="icon" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <HomeDisplay />
                </Container>
            </Grow>
        </Container>
    )
}
export default App