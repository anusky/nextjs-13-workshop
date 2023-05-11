import { User } from "@prisma/client";
import { Suspense } from "react";
import PostList from "./PostList";

type MembersPageProps = {
  params: {
    id: string;
  };
};

const fetchUser: (id: string) => Promise<User> = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );

const MembersPage = async ({ params }: MembersPageProps) => {
  const userInfo = await fetchUser(params.id);

  return (
    <div className="grid gap-4 p-8">
      <h1>User name{userInfo.username}</h1>

      <Suspense fallback={<div className="loading-message">Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <PostList userId={userInfo.id} />
      </Suspense>
    </div>
  );
};

export default MembersPage;
