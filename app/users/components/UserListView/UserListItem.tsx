type UserListItemProps = {
  user: MemberListItem;
  onClick: (user: MemberListItem) => void;
};

const UserListItem = ({ user, onClick }: UserListItemProps) => {
  const handleOnClickUser = () => onClick(user);
  return (
    <li
      className="py-1 hover:bg-slate-400 rounded-sm px-2 cursor-pointer"
      key={user.id}
      onClick={handleOnClickUser}
    >
      {user.name}
    </li>
  );
};
export default UserListItem;
