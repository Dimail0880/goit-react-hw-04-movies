import React, { Component } from 'react'
import {reviewRequest} from '../helpers/getAPI'
import shortId from "shortid";
import ReviewItem from './ReviewItem'



export default class Review extends Component {
   
    
        state ={
            reviewList: []
        }

        componentDidMount() {
            const movieID = this.props.match.params.movieId
            reviewRequest(movieID).then(res => this.setState({reviewList: res.data.results }))
           }
    
    

    render() {
        const {reviewList} = this.state
       

        return (
             reviewList.length ? (<ul>
                {reviewList.map((el)=>(<li key={shortId()}>
             <ReviewItem review={el}/>
                 </li>)) }
             </ul>) : (<p>We don't have any reviews for this movie...</p>)
            
            
        )
    }
}
