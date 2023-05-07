import { Suspense } from "react";
import PostList, { preload } from "./PostList";

type MembersPageProps = {
  params: {
    id: string;
  };
  searchParams: {
    seePosts: "true" | "false";
  };
};

const fetchUser = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );

const MembersPage = async ({ params, searchParams }: MembersPageProps) => {
  const { seePosts = "false" } = searchParams;
  const userInfo = await fetchUser(params.id);
  preload(userInfo.id);

  return (
    <div className="grid gap-4 p-8">
      <h1>User name{userInfo.username}</h1>
      {/* Send the artist information first,
      and wrap albums in a suspense boundary */}
      {seePosts === "true" && (
        <Suspense fallback={<div className="loading-message">Loading...</div>}>
          {/* @ts-expect-error Server Component */}
          <PostList id={userInfo.id} />
        </Suspense>
      )}
    </div>
  );
};

export default MembersPage;
