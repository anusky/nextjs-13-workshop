import Link from "next/link";
import { fetchPosts } from "./utils";

const StaticPostsPage = async () => {
  const postList = await fetchPosts();
  return (
    <div>
      <h1>StaticPostsPage</h1>
      {/* <pre>{JSON.stringify(postList, null, 4)}</pre> */}
      <ul>
        {postList.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/static-posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaticPostsPage;
