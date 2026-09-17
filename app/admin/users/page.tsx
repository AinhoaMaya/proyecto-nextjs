import Users from "@/components/users/Users";
import FormUsers from "@/components/users/FormUsers";

export default function UsersPage() {
  return (
    <main className="p-6 flex flex-col gap-6 items-center">
      <h1 className="text-white">Gestión de Usuarios</h1>

      <div className="flex g-10 overflow-hidden shadow-xl">
        <div className="flex-1 grid grid-cols-2 grid-rows-1 gap-2 bg-amber-50 p-3 border rounded-xl">
          <FormUsers />
        </div>
        
        <div className="flex-1 bg-amber-50 p-3 border rounded-xl">
          <Users />
        </div>
      </div>
    </main>
  );
}