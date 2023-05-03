import { cache, use } from "react";

type SelectedUserInfoProps = {
  user?: MemberListItem;
};

interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const fetchUserInfo = cache((id: number) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  )
);

const SelectedUserInfo = ({ user }: SelectedUserInfoProps) => {
  if (!user) {
    return <div>No User Selected</div>;
  }
  const userInfo: UserInfo = use(fetchUserInfo(user.id));
  return (
    <div className="grid">
      <span>Name: {userInfo.name}</span>
      <span>Username: {userInfo.username}</span>
    </div>
  );
};

export default SelectedUserInfo;
