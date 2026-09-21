"use client";

import { useState } from "react";
import Users from "@/components/users/Users";
import FormUsers from "@/components/users/FormUsers";
import initialUsers from "@/data/users.json";

type User = (typeof initialUsers)[number];

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [hasCreatedUser, setHasCreatedUser] = useState(false);

  return (
    <main className="flex min-h-screen flex-col gap-6 bg-slate-50 p-6">
      <h1 className="text-2xl font-semibold text-slate-800">Gestión de Usuarios</h1>

      <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row">
        <div className="w-full lg:w-80">
          <FormUsers
            onUserCreated={(user) => {
              setUsers((currentUsers) => [...currentUsers, user]);
              setHasCreatedUser(true);
            }}
          />
        </div>

        <div className="min-w-0 flex-1">
          <Users users={users} hasCreatedUser={hasCreatedUser} />
        </div>
      </div>
    </main>
  );
}