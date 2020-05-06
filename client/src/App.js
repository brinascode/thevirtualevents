import React from 'react';
import AppContext from "./utils/AppContext"


import {Switch,Route} from "react-router"
import {Redirect} from "react-router-dom"
import {Grid} from "@material-ui/core"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
//Pages for Routing
import Home from "./pages/Home"
import EventSearch from "./pages/EventSearch"
import Auth from "./pages/Auth"
import UserHome from "./pages/UserHome"


class App extends React.Component {
  constructor(){
      super()

      this.handleWindowResize = this.handleWindowResize.bind(this)
      this.setAuthState = this.setAuthState.bind(this)

      this.state={
          mobile:window.innerWidth > 500 ? false : true,
          authState:false,
          setAuthState: this.setAuthState,
          text:"test"
      }
     
  }

  setAuthState(value){
    this.setState({authState:value})
  }

  handleWindowResize(){
      if(window.innerWidth > 700){
          this.setState({mobile:false})
      }else{
          this.setState({mobile:true})
      }
  }

  componentDidMount(){
      window.addEventListener("resize",this.handleWindowResize) 
  }

  componentWillUnmount(){
      window.removeEventListener("resize",this.handleWindowResize)
  }

  render(){
    return (
      <AppContext.Provider value={this.state}>
        <Switch>
            <Grid container>
                <NavBar/>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/home" component={Home}/>
                <Route path="/eventSearch/:type" component={EventSearch}/>
                <Route path="/auth/:type" component={Auth}/>
                <Route path="/userHome" render={()=>{return(this.context.authState ? <UserHome /> : <Redirect to="/home" />)}}/>
                <Footer/>
            </Grid>
        </Switch>
      </AppContext.Provider>
    );
  }
  
}

App.contextType = AppContext
export default App;
