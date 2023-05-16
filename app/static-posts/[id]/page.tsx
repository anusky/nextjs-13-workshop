// Let's apply generateStaticParams

import { fetchPosts } from "../utils";

export async function generateStaticParams() {
  const postList = await fetchPosts();
  return postList.slice(0, 5).map((post: Post) => {
    return {
      id: `${post.id}`,
    };
  });
}
const fetchPostById = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
const StaticPostPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPostById(params.id);

  return (
    <div>
      <h1>{params.id}</h1>
      <h1>Post {post.title}</h1>
      {/* <pre>{JSON.stringify(postList, null, 4)}</pre> */}
    </div>
  );
};

export default StaticPostPage;
