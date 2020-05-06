import React from "react"
import {
    AppBar,
    Toolbar,
    Button,
    Container,
    Grid,
    GridList,
    GridListTile,
    TextField,
    MenuItem
} from "@material-ui/core"
import {Link} from "react-router-dom"
import siteIcon from "../images/icon.png"
import AppContext from "../utils/AppContext"

var menuStyle = { // border:"solid pink",
    flexGrow: "1",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-end"

}

var toolbarStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "left",
    color: "black"
}

class NavBar extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}>
                <AppBar position="fixed"
                    style={
                        {backgroundColor: "white"}
                }>
                    <Toolbar style={toolbarStyle}>
                        <h1 style={
                            {
                                fontFamily: "Palanquin Dark",
                                fontSize: "2.2vw"
                            }
                        }>
                            <Link to="/"
                                style={
                                    {
                                        textDecoration: "none",
                                        color: "black",
                                        display: "flex",
                                        flexFlow: "row wrap",
                                        alignItems: "center"
                                    }
                            }>
                                <img src={siteIcon}
                                    alt="icon"
                                    width="8%"/>
                                The Virtual Events
                            </Link>
                        </h1>
                        <div style={menuStyle}>
                            <Button color="inherit">
                                About</Button>

                          
                                {
                                this.context.authState === true ?
  <Button color="inherit">
                                    <Link to="/userHome" className="clearTextDecoration">
                                        <i className="material-icons md-48">home</i>Home</Link>
                                 </Button>: <></>
                            }


                            <Button color="inherit">
                                {
                                this.context.authState === false ? <span>

                                    <Link to="/auth/login" className="clearTextDecoration">
                                        <i className="material-icons md-48">account_circle</i>Login to post your event!</Link>
                                </span> : <span>

                                    <Link to="/auth/logout" className="clearTextDecoration">
                                        <i className="material-icons md-48">account_circle</i>Logout</Link>
                                </span>
                            } </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </Grid>
        )
    }
} NavBar.contextType = AppContext;
export default NavBar
