import React from "react"

class TableBody extends React.Component {
    render() {
        return (
            <tbody>
            <tr>
              <td id="release">{this.props.movieData.release_date}</td>
              <td id="director">{this.props.movieData.director}</td>
              <td id="producer">{this.props.movieData.producer}</td>
            </tr>
            </tbody>
        )
    }
}


export default TableBody