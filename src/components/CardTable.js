import React from "react"
import TableBody from "./TableBody"

class CardTable extends React.Component {
    render() {
        return (
            <table>
            <thead>
              <tr>
                <th>Release Date</th>
                <th>Director</th>
                <th>Producer</th>
              </tr>
            </thead>
                <TableBody movieData={this.props.movieData}/>
            </table>
        )
    }
}


export default CardTable