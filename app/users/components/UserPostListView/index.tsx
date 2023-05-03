const fetchUserPostList = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then((res) =>
    res.json()
  );

const UserPostListView = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const postList: PostItem[] = await fetchUserPostList(searchParams.id);
  if (!postList?.length) return null;
  return (
    <section>
      <h2>Post List</h2>
      <ul className="border-2 border-purple-400 rounded-lg p-2 grid gap-y-4">
        {postList.map((post) => (
          <li key={post.id}>
            <h2 className="font-bold uppercase">
              {post.id} - {post.title}
            </h2>
            <p className="text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserPostListView;
