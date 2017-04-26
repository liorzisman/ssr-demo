import React from 'react';
import { connect } from 'react-redux';
import { togglePost } from '../actions';

const Post = ({
  post,
  onLike
}) => (
  <div>
    <h2>{post.title}</h2>
    <img src={post.imageUrl}/>
    <p>{post.description}</p>
    <input type="checkbox" onClick={onLike} label="Like" defaultChecked={post.liked}/>
  </div>
);


const PostsFeed = ({
  posts,
  onPostLike
}) => (
  <div>
    {posts.map(post =>
      <Post
        key={post.id}
        post={post}
        onLike={() => onPostLike(post.id)}
        />
      
    )}
  </div>
);

const getLikedPosts = (
  posts,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return posts;
    case 'SHOW_LIKED':
      return posts.filter(
        t => t.liked
      );
    case 'SHOW_ACTIVE':
      return posts.filter(
        t => !t.liked
      );
  }
}

const mapStateToTodoListProps = (
  state
) => {
  return {
    posts: getLikedPosts(
      state.posts,
      state.visibilityFilter
    )
  };
};
const mapDispatchToTodoListProps = (
  dispatch
) => {
  return {
    onPostLike: (id) => {
      dispatch(togglePost(id));
    }
  };
};
export const VisiblePostsFeed = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(PostsFeed);