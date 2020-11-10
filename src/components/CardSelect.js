import React from "react"
//import SelectOption from "./SelectOption"

class CardSelect extends React.Component {
    render() {
        return (
            <select id="dropdown" onChange={this.props.handleSelectProp}>
                {this.props.movieData.map(movieData => (
                    <option key={movieData.id} movieData={this.props.movieData}>{movieData.title}</option>
                ))}
            </select>
        )
    }

}


export default CardSelect