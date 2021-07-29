import React from "react";
import Card from "../Card/Card";

import "./PostItem.css";

const PostItem = (props) => {
  return (
    <li className="post-item">
      <Card className="post-item__content">
          <div className="post-item__info">
            <h2>{props.title}</h2>
            <p>
              {props.body}
            </p>
          </div>
      </Card>
    </li>
  );
};

export default PostItem;
