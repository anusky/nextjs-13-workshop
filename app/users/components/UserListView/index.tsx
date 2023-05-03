"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SelectedUserInfo from "./SelectedUserInfo";
import UserListItem from "./UserListItem";

type Props = { userList: MemberListItem[] };

const UserListView = ({ userList }: Props) => {
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState<MemberListItem>();

  const handleOnClickUser = (user: MemberListItem) => {
    router.replace(`/users?id=${user.id}`);
    setSelectedUser(user);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2>Users</h2>
        <ul>
          {userList.map((user) => {
            return (
              <UserListItem
                key={user.id}
                user={user}
                onClick={handleOnClickUser}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Selected User</h2>
        <SelectedUserInfo user={selectedUser} />
        {/* <ServerComponentsContainer>
            <SelectedUserInfo user={selectedUser} />
        </ServerComponentsContainer> */}
      </div>
    </div>
  );
};

export default UserListView;
