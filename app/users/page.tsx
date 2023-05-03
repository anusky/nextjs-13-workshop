import { Inter } from "next/font/google";
import UserListView from "./components/UserListView";
import UserPostListView from "./components/UserPostListView";
type MemberListItem = {
  id: number;
  name: string;
};
type UserPageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};
const inter = Inter({ subsets: ["latin"] });
const fetchUserList = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
export default async function UsersPage({ searchParams }: UserPageProps) {
  const userList: MemberListItem[] = await fetchUserList();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserListView userList={userList} />
      {/* @ts-expect-error Server Component */}
      <UserPostListView searchParams={searchParams} />
    </main>
  );
}
