import React from "react"
import CardTable from "./CardTable"

class CardContent extends React.Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.movieData.title}</h2>
                <p>{this.props.movieData.description}</p>
                <CardTable movieData={this.props.movieData}/>
            </div>
        )
    }
}


export default CardContent