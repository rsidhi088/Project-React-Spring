import React from "react";
import CommentsApi from "../../api/CommentsApi";

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postid: this.props.postid
       };



       //CommentsApi.deleteComment(3);
    }
 
    render() {
        return <ul class="list-group"> <li class="list-group-item"> {this.props.comment}
        <span className="badge badge-pill badge-danger mx-md-2" style={{cursor: "pointer"}} onClick={() => this.props.onDeleteClick()}> Delete</span>
        </li> </ul>
    }
}
export default Comment;
