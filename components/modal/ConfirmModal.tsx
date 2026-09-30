import { X } from "lucide-react";

type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
};

type ConfirmModalProps = {
  user: User;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting: boolean;
  errorMessage?: string;
};

export default function ConfirmModal({
  user,
  onConfirm,
  onCancel,
  isDeleting,
  errorMessage,
}: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-delete-title"
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="confirm-delete-title" className="text-lg font-semibold text-slate-800">
            Confirmar borrado
          </h2>
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            aria-label="Cerrar modal"
            className="rounded p-1 text-slate-500 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-700">
          ¿Estás seguro de que quieres borrar a {user.name} {user.lastname}?
        </p>
        {errorMessage && <p role="alert" className="mt-3 text-sm text-red-700">{errorMessage}</p>}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isDeleting ? "Borrando..." : "Borrar usuario"}
          </button>
        </div>
      </section>
    </div>
  );
}