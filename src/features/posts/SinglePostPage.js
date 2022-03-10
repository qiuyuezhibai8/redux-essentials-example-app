import React from "react";
import { useSelector } from "react-redux";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  console.log(postId);

  const post = useSelector(state => {
    console.log(state.posts.find(post => post.id === postId));
    return state.posts.find(post => post.id === postId);
  }
  );

  if (!post) {
    return <span>404</span>
  }
  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
    </section>
  )
}