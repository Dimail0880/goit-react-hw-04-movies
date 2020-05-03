import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {castRequest} from '../helpers/getAPI'
import shortId from "shortid";
import CastActorItem from './CastActorItem';


export default class Cast extends Component {
    state ={
        actors: []
    }
    componentDidMount(){
        const movieID = this.props.match.params.movieId
        castRequest(movieID).then(res => this.setState({actors: res.data.cast }))
       }

    render() {
        const {actors} = this.state
        return (
            
                <ul>
                   {actors.map((el)=>(<li key={shortId()}>
                <CastActorItem actor={el}/>
                    </li>)) }
                </ul>
            
        )
    }
}
