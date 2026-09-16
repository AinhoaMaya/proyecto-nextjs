import Users from "@/components/users/Users";
import FormUsers from "@/components/users/FormUsers";

export default function UsersPage() {
  return (
    <main className="flex gap-8">
      <Users />
      <FormUsers />
    </main>
  );
}