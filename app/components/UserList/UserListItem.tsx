"use client";

import { User } from "@prisma/client";
import Link from "next/link";

const UserListItem = ({ user }: { user: User }) => {
  return (
    <li>
      <Link href={`/users?user=${user.id}`}>{user.email}</Link>
    </li>
  );
};

export default UserListItem;
