"use client";

import { useState } from "react";
import Users from "@/components/users/Users";
import FormUsers from "@/components/users/FormUsers";
import initialUsers from "@/data/users.json";

type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editUser, setEditUser] = useState<User>();

  const onDeleteUser = async (id: number) => {
    const response = await fetch(`/api/users?id=${id}`, { method: "DELETE" });

    if (response.ok) {
      setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
    }
  };

  return (
    <main className="flex min-h-screen flex-col gap-6 bg-slate-50 p-6">
      <h1 className="text-2xl font-semibold text-slate-800">Gestión de Usuarios</h1>

      <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row">
        <div className="w-full lg:w-80">
          <FormUsers
            onUserCreated={(user) => {
              setUsers((currentUsers) => [...currentUsers, user]);
            }}
            editUser={editUser}
            onUserUpdated={(updatedUser) => {
              setUsers((currentUsers) =>
                currentUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
              );
              setEditUser(undefined);
            }}
            onCancelEdit={() => setEditUser(undefined)}
          />
        </div>

        <div className="min-w-0 flex-1">
          <Users
            users={users}
            onEditUser={(id) => setEditUser(users.find((user) => user.id === id))}
            onDeleteUser={onDeleteUser}
          />
        </div>
      </div>
    </main>
  );
}