import { useRouter } from "next/navigation";

type UserListItemProps = {
  user: MemberListItem;
  onClick: (user: MemberListItem) => void;
};

const UserListItem = ({ user, onClick }: UserListItemProps) => {
  const router = useRouter();
  const handleOnClickUser = () => onClick(user);
  const handleOnMouseEnter = () => {
    console.log("prefetch");

    router.prefetch(`/posts`);
  };
  return (
    <li
      className="py-1 hover:bg-slate-400 rounded-sm px-2 cursor-pointer"
      key={user.id}
      onClick={handleOnClickUser}
      onMouseEnter={handleOnMouseEnter}
    >
      {user.name}
    </li>
  );
};
export default UserListItem;
