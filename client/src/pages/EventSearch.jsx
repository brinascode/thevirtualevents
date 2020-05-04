import React from "react"
import {AppBar, Toolbar, Button, Container, Grid, GridList, Card, CardMedia, CardContent,Chip} from "@material-ui/core"
import styles from "./home.module.css"

   var cardContentStyle = {
       textAlign:"center",
       paddingTop:"2%"
    }

    var chipStyle={
        margin:"3px"
    }

export default class EventSearch extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(

            <Grid container item spacing={3}>
                   <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingRight:"10%",paddingLeft:"10%"}}>
                                <CardMedia
                                style={{height:"40vh",backgroundPosition:"center",backgroundSize:"100% auto"}}
                                image="https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                                title="Fun"
                                />
                                
                        </Grid>

                    <Grid item container style={{paddingLeft:"10%",paddingRight:"10%"}}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <h2 className="defaultFont">
                                 <br></br>
                                 Find fun virtual events to attend this week or next week!
                            </h2>
                            
                            <br></br>  <br></br>
                           
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                <CardMedia
                                style={{height:"40vh",backgroundPosition:"center",backgroundSize:"100% auto"}}
                                image="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                title="Fun"
                                />
                                <Card>
                                    <CardContent style={cardContentStyle}>
                                        <h1 > Fun Events</h1>
                                        {["Networking","Meetups","Meeting people"].map((data,position) => {
                                            return (
                                                <Chip key={position} label={data} style={chipStyle}/>
                                            );
                                        })}
                                    </CardContent>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                <CardMedia
                                style={{height:"40vh",backgroundPosition:"center",backgroundSize:"100% auto"}}
                                image="https://images.unsplash.com/photo-1502185635613-0a5b2e78efea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                title="Fun"
                                />
                                <Card>
                                    <CardContent style={cardContentStyle}>
                                        <h1  className="defaultFont">Level Up Events</h1>
                                        {["Learn something new","New skills"].map((data,position) => {
                                            return (
                                                <Chip key={position} label={data} style={chipStyle}/>
                                            );
                                        })}
                                    </CardContent>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                <CardMedia
                                style={{height:"40vh",backgroundPosition:"center",backgroundSize:"100% auto"}}
                                image="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                title="Career"
                                />
                                <Card>
                                    <CardContent style={cardContentStyle}>
                                        <h1 >Career Events</h1>
                                       {["Self-improvement","Networking","LinkedIn Events","Virtual Happy Hour", "Creatives","Tech"].map((data,position) => {
                                            return (
                                                <Chip key={position} label={data} style={chipStyle}/>
                                            );
                                        })}
                                    </CardContent>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                <CardMedia
                                style={{height:"40vh",backgroundPosition:"center",backgroundSize:"100% auto"}}
                                image="https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                title="Fun"
                                />
                                <Card>
                                    <CardContent style={cardContentStyle}>
                                        <h1  className="defaultFont">Fitness Events</h1>
                                        {["Get movin!","Exercising","Virtual Zumba","More"].map((data,position) => {
                                            return (
                                                <Chip key={position} label={data} style={chipStyle} /> 
                                            );
                                        })}
                                    </CardContent>
                                </Card>
                        </Grid>

                    </Grid>
                
            </Grid>
        )
    }
}