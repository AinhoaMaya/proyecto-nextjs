import { ChevronLeft, ChevronRight, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
});

const formatDate = (date?: string) =>
  date ? dateFormatter.format(new Date(date)).replaceAll("/", "-") : "—";

type UsersProps = {
  users: {
    id: number;
    name: string;
    lastname: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
  }[];
  onEditUser: (id: number) => void;
  onDeleteUser: (id: number) => void;
};

export default function Users({ users, onEditUser, onDeleteUser }: UsersProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sortedUsers = [...users].sort((firstUser, secondUser) => {
    const creationDateDifference =
      Date.parse(secondUser.createdAt ?? "") - Date.parse(firstUser.createdAt ?? "");

    return creationDateDifference || secondUser.id - firstUser.id;
  });

  if (!users.length) {
    return (
      <section className="flex h-full min-h-64 items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg">
        <p className="text-sm text-slate-500">Rellena el formulario para crear un Usuario.</p>
      </section>
    );
  }

  const safeIndex = Math.min(currentIndex, sortedUsers.length - 1);
  const user = sortedUsers[safeIndex];

  return (
    <section className="h-full w-full overflow-hidden rounded-2xl bg-white shadow-lg">
      <ul>
        <li key={user.id} className="flex flex-col gap-6 border-b border-slate-200 px-4 py-4 text-sm last:border-b-0">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-4 border-slate-200">
              <button
                type="button"
                aria-label="Usuario anterior"
                onClick={() => setCurrentIndex(Math.max(0, safeIndex - 1))}
                disabled={safeIndex === 0}
                className="bg-transparent p-1 text-[#183153] hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-slate-600">{safeIndex + 1} de {sortedUsers.length}</span>
              <button
                type="button"
                aria-label="Usuario siguiente"
                onClick={() => setCurrentIndex(Math.min(safeIndex + 1, sortedUsers.length - 1))}
                disabled={safeIndex === sortedUsers.length - 1}
                className="bg-transparent p-1 text-[#183153] hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex gap-2">
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
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <span className="text-slate-700"><strong>Nombre:</strong> {user.name}</span>
            <span className="text-slate-700"><strong>Apellidos:</strong> {user.lastname}</span>
            <span className="wrap-anywhere text-slate-700"><strong>Correo:</strong> {user.email}</span>
            <span className="text-slate-700"><strong>Fecha de creación:</strong> {formatDate(user.createdAt)}</span>
            <span className="wrap-anywhere text-slate-700"><strong>Fecha de modificación:</strong> {formatDate(user.updatedAt)}</span>
          </div>
        </li>
      </ul>
    </section>
  );
}