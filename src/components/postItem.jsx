import React from "react";
import MyButton from "./UI/button/MyButton";
import { useHistory } from "react-router";

const PostItem = (props) => {
    const router = useHistory()    
    return (
        <div className="post">
          <div className="post__content">
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
            {props.post.body}
            </div>
          </div>
          <div className="post__btns">
              <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
                Открыть пост
              </MyButton>
              <MyButton onClick={() => props.remove(props.post)}>
                Удалить пост
              </MyButton>
          </div>
        </div>
    );
};

export default PostItem;