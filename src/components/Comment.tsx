import { Comment as CommentModel } from "../models";

type CommentProps = {
  comment: CommentModel;
};

const Comment = (props: CommentProps) => {
  const { comment } = props;
  return (
    <div>
      <p>{comment.body}</p>
      <p>
        <strong>Written by:</strong> {comment.author}
      </p>
    </div>
  );
};

export default Comment;
