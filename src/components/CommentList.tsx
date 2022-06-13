import { Comment as CommentModel } from "../models";
import Comment from "./Comment";

type CommentListProps = {
  comments: CommentModel[];
};

const CommentList = (props: CommentListProps) => {
  const comments = props.comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
  return <div>{comments}</div>;
};

export default CommentList;
