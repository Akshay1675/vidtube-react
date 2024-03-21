import CommentList from "./CommentList"
import { commentsData } from "../utils/commentData"


const CommentsContainer = () => {
    
  return (
    <div className="px-4 mx-4 mt-2">
      <h1 className="font-bold text-xl">Comment :</h1>
      <CommentList comments={ commentsData }/>
    </div>
  )
}

export default CommentsContainer
