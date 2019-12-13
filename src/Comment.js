//your code here
import React, {Component} from 'react' 

export default class Comment extends Component {
    render() {
        return(
            <div className = "comments">
                {this.props.commentText}
            </div>
        )
    }
}