import React from "react";

import Card from "../Card/Card";
import PostItem from "../PostItem/PostItem";

import "./PostsList.css";

const PostsList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className="posts-list">
        <h2>No posts found!</h2>
      </Card>
    );
  }
  return (
    <ul className="posts-list">
      {props.items.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </ul>
  );
};

export default PostsList;
