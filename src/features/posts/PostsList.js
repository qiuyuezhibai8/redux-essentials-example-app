import react from 'react'
import { Link } from 'react-router-dom'
import {
  useSelector
} from 'react-redux'

export const PostsList = () => {
  const posts = useSelector(state => state.posts);
  const renderedPosts = posts.map(posts => (
    <article>
      <h3> {posts.title} </h3>
      <p> {posts.content.substring(0, 100)}</p>
      <Link to={'/posts/' + posts.id}>View post</Link>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}