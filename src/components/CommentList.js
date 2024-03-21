import Comment from "./Comment"
const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map((comment) => 
      <div> 
        <Comment data={comment}/> 
        <div className=" border-l-2 border-l-pink-600 ml-12">
        <CommentList comments={comment.replies}/>
        </div>
      </div>
        )}
    </div>
  )
}

export default CommentList
