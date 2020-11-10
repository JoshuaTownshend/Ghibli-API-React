import React from "react"

class SelectOption extends React.Component {
    render() {
        return (
            <React.Fragment>
            {this.props.movieData.map(movieData => (
                <option value={this.props.key}>{movieData.title}</option>
            ))}
            </React.Fragment>
        )
    }

}


export default SelectOption