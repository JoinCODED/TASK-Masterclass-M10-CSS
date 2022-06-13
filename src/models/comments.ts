export interface Comment {
  id: number;
  body: string;
  author: string;
}

export type CommentQuery =
  | {
      data: Comment[];
      loading: false;
      error: any;
    }
  | {
      data: undefined;
      loading: true;
      error: undefined;
    };
