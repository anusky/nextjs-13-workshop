import NewUserForm from "@/app/components/NewUserForm";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const NewUserPage = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <h2>NewUserPage</h2>
      <NewUserForm />
    </section>
  );
};

export default NewUserPage;
