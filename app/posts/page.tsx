// getStaticProps
const fetchPostListStatic = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

// getServerSideProps
const fetchPostListDynamic = () =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    // or
    //next: { revalidate: 0 },
    // or
    // cache: "no-cache", // From Fetch API
  }).then((res) => res.json());

// ISR --> Incremental Static Regeneration
const fetchPostListIncreamental = () =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  }).then((res) => res.json());

const PostsPage = async () => {
  const postList = await fetchPostListIncreamental();
  return (
    <div>
      <h1>PostsPage</h1>
      <pre>{JSON.stringify(postList, null, 4)}</pre>
    </div>
  );
};

export default PostsPage;
