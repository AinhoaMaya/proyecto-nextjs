type User = {
    id: number;
    name: string;
    lastname: string;
    email: string;
};

type ConfirmModalProps = {
    user: User;
}

export default function ConfirmModal({ user }: ConfirmModalProps) {

  return (
    <div className="flex justify-center border-b border-slate-200">
        <p className="text-slate-700">¿Estás seguro de que quieres borrar a {user.name} {user.lastname}</p>
    </div>

  );
}