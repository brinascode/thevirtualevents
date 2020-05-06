import React from "react"
import {
    Grid,
    Card,
    TextField,
    Button,
    Snackbar
} from "@material-ui/core"
import {useReducer, useContext, useState} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"
import AppContext from "../utils/AppContext"


// Used to login
function loginReducer(state, action) {
    switch (action.type) {
        case "fieldChange":
            {
                return {
                    ... state,
                    [action.fieldName]: action.payload

                }
            }

        case "login":
            {
                return {
                    ... state,
                    isLoading: true,
                    message: "Logging you in",
                    type: "Login"
                }

            }

        case "success":

            {
                return {
                    ... state,
                    isLoading: true,
                    message: "Success!",
                    snackBarOpen:true
                }
            }


        case "failed":

            {
                return {
                    ... state,
                    isLoading: true,
                    message: "Unsuccessful attempt. Check your credentials and try again.",
                    snackBarOpen:true
                }
            }


        case "signup":
            {
                return {
                    ... state,
                    isLoading: true,
                    message: "Signing you up",
                    type: "Sign Up"
                }
            }

        case "switchType":
            {
                return {
                    ... state,
                    type: state.type === "Login" ? "Sign Up" : "Login"
                }
            }

        case "restart":
            {
                return{
                    ... state,
                    message:"",
                    snackBarOpen:false
                }
            }
       
    }
}

const initialState = {
    username: "",
    password: "",
    type: "Login",
    snackBarOpen:false,
    message: "",
    isLoading: false,
    isLoggedIn: false
}

export default function Auth(props) {

    const appContext = useContext(AppContext)

    // Before we do anything, was this component accessed in order to logout? --> if so, we redirect to the siteHome
    if (props.match.params.type === "logout") {
        axios.post("/api/users/logout")
        appContext.setAuthState(false)
        // setReturnType("siteHomeRedirect")
        props.history.push('/')
    }

    // This is to be used to login/or signup.
    const [state, dispatch] = useReducer(loginReducer, initialState)
    const {
        username,
        password,
        message,
        isLoading,
        isLoggedIn,
        type,
        snackBarOpen
    } = state

    const login = (e) => {
        dispatch({type: "login"})
        axios.post("/api/users/login", {
            username: state.username,
            password: state.password
        }).then((response) => {
            appContext.setAuthState(true)
            dispatch({type: "success"})
           
        }).catch((err) => {
            dispatch({type: "failed"})
        })
    }
    const signup = (e) => {
        dispatch({type: "signup"})
        axios.post("/api/users/signup", {
            username: state.username,
            password: state.password
        }).then((response) => {
            appContext.setAuthState(true)
            dispatch({type: "success"})
        }).catch((err) => {
            dispatch({type: "failed"})
        })
    }

    const successRedirect = (e)=>{
        props.history.push('/userHome')
    }


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

                    <div style={
                        {textAlign: "center"}
                    }>
                        <h1>{type}</h1>
                        <Button onClick={
                            () => {
                                dispatch({type: "switchType"})
                            }
                        }>
                            {
                            type === "Login" ? "Sign Up " : "Login"
                        } </Button>

                        <br></br>
                    </div>
                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth margin="normal"
                        onChange={
                            (e) => {
                                dispatch({type: "fieldChange", fieldName: "username", payload: e.target.value})
                            }
                        }/><br></br>

                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth margin="normal"
                        onChange={
                            (e) => {
                                dispatch({type: "fieldChange", fieldName: "password", payload: e.target.value})
                            }
                        }/><br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <Button color="secondary" variant="contained"
                        style={
                            {width: "50%"}
                        }
                        onClick={
                            (e) => {
                                type === "Login" ? login(e) : signup(e)
                            }
                    }>
                        {type}</Button>
                    <br></br>
                    <br></br>
                    <br></br>
                   

                    <Snackbar open={
                           snackBarOpen
                        }

                        autoHideDuration={1000}
                        onClose={
                            () => {
                                message === "Success!" ? successRedirect() : dispatch({type:"restart"})
                            }
                        }
                        message={message}/>

                </Card>
    </Grid>
</Grid>
    )


}
