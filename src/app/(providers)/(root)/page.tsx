"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/post/postId">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </Link>
    </div>
  );
}

export default HomePage;
