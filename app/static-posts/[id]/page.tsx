// Let's apply generateStaticParams

const fetchPostById = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
const StaticPostsPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPostById(params.id);

  return (
    <div>
      <h1>{params.id}</h1>
      <h1>Post {post.title}</h1>
      {/* <pre>{JSON.stringify(postList, null, 4)}</pre> */}
    </div>
  );
};

export default StaticPostsPage;
