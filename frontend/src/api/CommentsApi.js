import Api from "./Api";
class CommentsApi {
   getAllComments() {
       return Api.get('/comments');
   }
   getCommentsByPostId(id) {
       return Api.get('/comments?postId='+id);
   }
   createComment(comment, postid) {
       return Api.post('/comments', { body: comment , post: {id: postid }});
   }
   updateComment(comment) {
       return Api.put('/comments', comment);
   }
   deleteComment(id) {
       return Api.delete('/comments/'+id);
   }
}
export default new CommentsApi();