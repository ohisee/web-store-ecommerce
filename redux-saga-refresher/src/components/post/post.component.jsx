/**
 * @fileoverview post component 
 */
import React from "react";
import Card from "../card/card.component";
import { useFetch } from "../effects/use-fetch.effect";

/**
 * @typedef {object} PostPropsType
 * @property {string} postId
 */

/** @type {React.FC<PostPropsType>} */
const Post = ({ postId }) => {
  /**
   * @typedef {object} PostType 
   * @property {string} title 
   * @property {string} body 
   */

  /** @type {[PostType, (p: PostType) => void]} */
  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   const fetchPost = async function () {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts?id=${postId}`);
  //     const posts = await res.json();
  //     setPost(posts[0]);
  //   }
  //   fetchPost();
  // }, [postId]);

  /** @type {PostType} */
  const post = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`);

  return (
    <Card>
      {
        post ? (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ) : <p>No post found</p>
      }
    </Card>
  );
};

export default Post;
