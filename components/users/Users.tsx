import { ChevronLeft, ChevronRight, Pencil, Trash2 } from "lucide-react";



type UsersProps = {
  users: {
    id: number;
    name: string;
    lastname: string;
    email: string;
  }[];
  onEditUser: (id: number) => void;
  onDeleteUser: (id: number) => void;
};

export default function Users({ users, onEditUser, onDeleteUser }: UsersProps) {
  if (!users.length) {
    return (
      <section className="flex min-h-64 items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg">
        <p className="text-sm text-slate-500">Rellena el formulario para crear un Usuario.</p>
      </section>
    );
  }

  return (
    <section className="w-full overflow-hidden rounded-2xl bg-white shadow-lg">
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex flex-col gap-2 border-b border-slate-200 px-4 py-4 text-sm last:border-b-0">
            <div className="flex shrink-0 gap-3 self-end">
              <button
                type="button"
                onClick={() => onEditUser(user.id)}
                aria-label={`Editar a ${user.name}`}
                className="bg-transparent p-0 text-[#183153] transition-transform duration-200 hover:scale-105 hover:bg-transparent">
                <Pencil size={24} />
              </button>
              <button
                type="button"
                onClick={() => onDeleteUser(user.id)}
                aria-label={`Borrar a ${user.name}`}
                className="bg-transparent p-0 text-[#183153] transition-transform duration-200 hover:scale-105 hover:bg-transparent">
                <Trash2 size={24} />
              </button>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <span className="text-slate-700"><strong>Nombre:</strong> {user.name}</span>
              <span className="text-slate-700"><strong>Apellidos:</strong> {user.lastname}</span>
              <span className="wrap-anywhere text-slate-600"><strong>Correo:</strong> {user.email}</span>
            </div>

            <div className="flex items-center justify-center gap-4 border-t border-slate-200 px-4 py-3">
              <button type="button" aria-label="previous user" className="bg-transparent p-1 text-[#183153] hover:bg-transparent">
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-slate-600">1 de {users.length}</span>
              <button type="button" aria-label="next user" className="bg-transparent p-1 text-[#183153] hover:bg-transparent">
                <ChevronRight size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}