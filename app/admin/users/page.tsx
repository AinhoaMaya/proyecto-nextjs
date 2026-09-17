import Users from "@/components/users/Users";
import FormUsers from "@/components/users/FormUsers";

export default function UsersPage() {
  return (
    <main className="p-6 flex flex-col gap-6 items-center">
      <h1 className="text-white">Gestión de Usuarios</h1>

      <div className="flex w-full max-w-5xl border rounded overflow-hidden shadow-xl">
        <div className="flex-1 bg-amber-50">
          <Users />
        </div>

        <div className="flex-1 bg-[hsl(216_55%_53%)]">
          <FormUsers />
        </div>
      </div>
    </main>
  );
}