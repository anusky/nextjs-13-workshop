const fetchUserPosts: (id: string) => Promise<Post[]> = (id: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(
          (res) => res.json()
        )
      );
    }, 2000);
  });
const PostList = async ({ userId }: { userId: string }) => {
  const list: Post[] = await fetchUserPosts(userId);
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
