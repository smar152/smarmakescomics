import React from "react";
import * as serviceWorker from "../serviceWorker";
import { posts } from "../data/blogPosts";

// const images = Object.keys(illustrations).map((key) => {
//   const { thumbSrc, src, title, subtitle, description } = illustrations[key];
//   return {
//     src: thumbSrc,
//     fullSrc: src,
//     title,
//     subtitle,
//     description,
//   };
// });

const Blog = (props) => {
  const blogPosts = posts.map((post) => {
    return (
      <>
        <h1>{post.title}</h1>
        <p>έλα που είσαι</p>
      </>
    );
  });
  return (
    <div id="illustration">
      <div className="container p-3">
        <h1 id="pageTitle" className="row p-2">
          Blog
        </h1>
        hello καλησπέρα
        {blogPosts}
      </div>
    </div>
  );
};

export default Blog;

serviceWorker.unregister();
