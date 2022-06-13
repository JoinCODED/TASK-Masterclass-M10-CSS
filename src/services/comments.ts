import { Comment, CommentQuery } from "../models";
import { API } from "./instance";
import { useEffect, useState } from "react";

export const useGetComments = (ids?: number[]): CommentQuery => {
  const [comments, setComments] = useState<Comment[] | undefined>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await API.get<Comment[]>("/comments");
        if (ids) {
          data = data.filter(({ id }) => ids.includes(id));
        }
        setComments(data);
      } catch (error) {
        setError(error);
      }
    })();

    return () => {
      setComments(undefined);
      setError(undefined);
    };
  }, [ids]);

  return {
    data: comments,
    error,
    loading: comments === undefined && error === undefined,
  } as CommentQuery;
};
