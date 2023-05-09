import { PrismaClient } from "@prisma/client";
import UserList from "../components/UserList";

const prisma = new PrismaClient();

const fetchUsers = () => prisma.user.findMany();

const UsersPage = async () => {
  const users = await fetchUsers();
  console.log(users);

  return (
    <div className="grid gap-y-4 items-center justify-center">
      <h1>List of all users</h1>
      <UserList userList={users} />
    </div>
  );
};

export default UsersPage;
