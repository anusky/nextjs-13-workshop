import PostList from "./PostList";

type MembersPageProps = {
  params: {
    id: string;
  };
};

const fetchUser = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );
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

const MembersPage = async ({ params }: MembersPageProps) => {
  const userInfo = await fetchUser(params.id);
  const userPostList = await fetchUserPosts(params.id);
  // const [info, postList] = await Promise.all([userInfo, userPostList]);

  return (
    <div className="grid gap-4 p-8">
      <h1>User name{userInfo.username}</h1>
      <PostList list={userPostList} />
    </div>
  );
};

export default MembersPage;
