import React from "react"
import {FormGroup, FormControlLabel, Checkbox, Button, Container, Grid, GridList, Card, CardMedia, CardContent,Chip} from "@material-ui/core"
import {Link} from "react-router-dom"
import axios from "axios"

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
        this.state={
            mainType:"",
            eventList:[],

        }

        this.apiSearch = this.apiSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isBoxChecked = this.isBoxChecked.bind(this)
        
    }

    apiSearch(searchBody){
        axios.post(`/api/events/search`,searchBody).then((response)=>{
            this.setState({eventList:response.data})
        })
    }

    componentDidMount(){
        var mainType = this.props.match.params.type
        //We get the events for the selected Main Type
        this.setState({mainType:mainType[0].toUpperCase() + mainType.substring(1)},()=>{
            this.apiSearch({type:mainType})
        })  
        //We set the menu checkbox as ticked
        
    }

    isBoxChecked(name){
        if(this.state.mainType === name){
            return true
        }
    }

    handleChange(e){
        var name = e.target.name
    }

    render(){
        return(
            <Grid container item spacing={3} style={{marginTop:"7.3vw"}}>
                <Grid item container xs={12} sm={12} md={2} lg={2} style={{padding:"2vw"}}>
                    <h3>Event Type</h3>
                     <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={true} onChange={this.handleChange} name="fun" type="eventType" />}
                                    label="Fun Events and Meetups"/>
                        </FormGroup>
                        <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox  onChange={this.handleChange} name="levelup" type="eventType"/>}
                                    label="Level Up Events"/>
                        </FormGroup>
                        <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox  onChange={this.handleChange} name="career" type="eventType"/>}
                                    label="Career Events"/>
                        </FormGroup>
                        <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox onChange={this.handleChange} name="fitness" type="eventType"/>}
                                    label="Fitness Events"/>
                        </FormGroup>
                        
                        <h3>Date </h3>
                        <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox  onChange name="today" />}
                                    label="This Week"/>
                        </FormGroup>
                        <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox  onChange name="this week" />}
                                    label="This Week"/>
                        </FormGroup>
                        <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox  onChange name="next week" />}
                                    label="Next Week"/>
                        </FormGroup>
                </Grid>

                <Grid item container xs={12} sm={12} md={10} lg={10} >
                    <Link to="/home" style={{color:"black",textDecoration:"none"}}>
                        <Button variant="outlined">
                            Back
                        </Button>
                    </Link>
                    <br></br>
                    <div style={{textAlign:"center"}}>
                        <h1> 
                            {this.state.mainType} Events 
                        </h1>
                    </div>

                    <Grid container spacing={3} style={{padding:"1%"}}>
                        {this.state.eventList.map((event,index)=>{
                            return(
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                  
                                  <Card>
                                            <CardMedia
                                            style={{height:"40vh",backgroundPosition:"center",backgroundSize:"100% auto"}}
                                            image="https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                            title="Fun"
                                            />
                                           
                                                <CardContent style={cardContentStyle}>
                                                    <h1  className="defaultFont">{event.name}</h1>
                                                    <h2>Date: {event.date.toString()}</h2>
                                                    {event.tags.map((data,position) => {
                                                        return (
                                                            <Chip key={position} label={data} style={chipStyle} /> 
                                                        );
                                                    })}
                                                    <br></br>
                                                <Link to="/eventSearch/fitness" className="clearTextDecoration">
                                                    <Button color="secondary" variant="outlined">View event page</Button>
                                                </Link>
                                                </CardContent>
                                            </Card>
                                       
                               </Grid>
                            )
                        })}
                    </Grid>
                
                </Grid>
                       
            </Grid>
        )
    }
}