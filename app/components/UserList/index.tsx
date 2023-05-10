import { User } from "@prisma/client";
import UserListItem from "./UserListItem";

type UserListProps = {
  userList: User[];
};
const UserList = (props: UserListProps) => {
  return props.userList.length === 0 ? (
    <p>No users found</p>
  ) : (
    <ul>
      {props.userList.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
