const fetchUswers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

export const MemberList = async () => {
  const users = await fetchUswers();
  return (
    <div>
      MemberList
      <pre>{JSON.stringify(users, null, 4)}</pre>
    </div>
  );
};
