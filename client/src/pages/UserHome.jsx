import React from "react"
import {Grid, Card, TextField, Button} from "@material-ui/core"
import {useReducer,useEffect} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"




export default function UserHome() {

    return (
        <Grid container
            style={
                {
                    marginTop: "7.3vw",
                    padding: "10%",
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "center",
                    backgroundImage: "url(https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
                    backgroundSize: "100% auto",
                    height: "100vh" 

                }
        }>
            <Grid item
                xs={12}
                sm={12}
                lg={4}
                md={5}>
                <Card style={
                    {
                        width: "100%",
                        display: "flex",
                        flexFlow: "row wrap",
                        justifyContent: "center",
                        padding: "4%"

                    }
                }>

              USERHOME
                   
                    

                </Card>
            </Grid>
        </Grid>
    )
}
