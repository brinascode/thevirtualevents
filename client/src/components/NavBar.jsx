import React from "react"
import {AppBar, Toolbar, Button, Container, Grid, GridList, GridListTile, TextField, MenuItem} from "@material-ui/core"

var menuStyle={
    // border:"solid pink",
    flexGrow:"1",
    display:"flex",
    flexFlow:"row wrap",
    justifyContent:"flex-end"

}

var toolbarStyle={
    display:"flex",
    flexFlow:"row wrap",
    justifyContent:"left",
    color:"black"
}

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <Grid item xs={12} sm={12} md={12} lg={12}>
                 <AppBar position="sticky" style={{backgroundColor:"white"}}> 
                    <Toolbar style={toolbarStyle}>
                        <h1 style={{fontFamily:"Palanquin Dark",fontSize:"2.2vw"}}>The Virtual Events</h1>
                        <div style={menuStyle}>
                            <Button color="inherit"> About</Button>
                            <Button color="inherit" ><i className="material-icons md-48">account_circle</i>Sign up to post your event!</Button>
                        </div>
                    </Toolbar>
                  </AppBar>
            </Grid>
        )
    }
}