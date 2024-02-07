"use client";
import React, { useState } from "react";

function PostDetailInfo(props: { params: { postId: string } }) {
  const params = props.params;
  const postId = params.postId;
  const [post, setPost] = useState<any>(null);

  return (
    <div>
      <ul className="flex-col">
        <li>
          <h1>{postId.title}</h1>
          <h3>{postId.content}</h3>
        </li>
        <li>
          <h1>{postId.title}</h1>
          <h3>{postId.content}</h3>
        </li>
      </ul>
    </div>
  );
}

export default PostDetailInfo;
