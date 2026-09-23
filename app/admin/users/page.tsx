"use client";

import { useState } from "react";
import Users from "@/components/users/Users";
import FormUsers from "@/components/users/FormUsers";
import initialUsers from "@/data/users.json";
import AdminLayout from "@/app/admin/AdminLayout";

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
    <AdminLayout
      title="Gestión de Usuarios"
      form={
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
      }

      table={
        <Users
          users={users}
          onEditUser={(id) => setEditUser(users.find((user) => user.id === id))}
          onDeleteUser={onDeleteUser}
        />
      }
    />
  );
}