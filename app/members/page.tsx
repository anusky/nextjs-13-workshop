import { MemberList } from "../components/MemberList";

function MembersPage() {
  return (
    <div>
      MembersPage
      {/* @ts-expect-error Server Component */}
      <MemberList />
    </div>
  );
}

export default MembersPage;
