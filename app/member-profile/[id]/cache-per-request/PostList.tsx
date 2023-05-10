import { cache } from "react";

const fetchUserPosts: (id: string) => Promise<Post[]> = cache((id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then((res) =>
    res.json()
  )
);

export const preload = (id: string) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
  void fetchUserPosts(id);
};

const PostList = async ({ id }: { id: string }) => {
  const list = await fetchUserPosts(id);

  return (
    <div>
      <h2>List of users posts</h2>
      <ul className="list-group list-group-flush list-disc list-inside">
        {list.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostList;
