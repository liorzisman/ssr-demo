import React from 'react';

const Post = ({
  post
}) => (
  <div>
    <h1>{post.title}</h1>
    <img className="post-img" src={post.imageUrl}/>
    <h3>{post.description}</h3>
    <input type="checkbox" label="Like"/><span> Like</span>
    <hr/>
  </div>
);

export const PostsFeed = ({
  posts
}) => (
  <div>
    {posts.map(post =>
      <Post
        key={post.title}
        post={post}
        />
    )}
  </div>
);