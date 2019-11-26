import React from "react";
import Comment from "./Comment";
import CommentsApi from "./../../api/CommentsApi";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            postid: this.props.postid,
            comment : "",
            comments : [] 
        };
    }

    componentDidMount() {
        CommentsApi.getCommentsByPostId(this.state.postid)
            .then(({data}) => {
                this.setState({comments: data});
            })
            .catch(err => console.error(err));
    }

      handleComment = async () => {
        try {
            const response = await CommentsApi.createComment(this.state.comment, this.state.postid);
            const comment = response.data;
            const newComments = this.state.comments.concat(comment);

            this.setState({
                comments: newComments,
                comment: ''
           });
        } catch (e) {
            console.error(e);
        }
    }

    async deleteComment(id) {
        try {
            await CommentsApi.deleteComment(id);
            const newComments = this.state.comments.filter(p => p.id !== id);
            this.setState({
                comments: newComments,
            });
        } catch (e) {
            console.error(e);
        }
    }

    handleCommentChange = (e) => {
        this.setState({ comment: e.target.value });
    }
        
    render() {
        const comments = this.state.comments;
   return (
       <div>
        <div>
            <ul>
                {comments.map(comment => 
                        <Comment key={comment.id} comment={comment.body} onDeleteClick={() => this.deleteComment(comment.id)}/>   
                    )}
            </ul>
        </div>
       <div className="comment">
           <div className="comment-body">
               <h4 className="comment-title" >Add your comment!</h4>
               <div>
                   <div className="form-group">
                       <textarea
                           className="form-control"
                           onChange={this.handleCommentChange}
                           value={this.state.comment}
                           />
                   </div> 
                   <div className="form-group">
                       <button
                           className="btn btn-primary btn-sm col-md-12"
                           onClick={this.handleComment}>
                           Post
                       </button>
                   </div>
               </div>
           </div>
       </div>
       </div>
   );
}
}
export default CommentForm;
