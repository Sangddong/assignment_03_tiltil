import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

function RecentPageForm(props: { params: { postId: string } }) {
  const params = props.params;
  const postId = params.postId;
  const [post, setPost] = useState<any>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/api/posts");
      setPost(response.data);
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <ul>
        <li>
          <Link href="/post/postId">
            {posts.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            ))}
          </Link>
        </li>
        <li>
          <Link href="/post/postId">
            {posts.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            ))}
          </Link>
        </li>
      </ul>
    </div>
  );
}
