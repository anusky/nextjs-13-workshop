const PostList = ({ list }: { list: Post[] }) => {
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
