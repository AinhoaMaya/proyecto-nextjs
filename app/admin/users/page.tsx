"use client";

import { useState } from "react";
import Users from "@/components/users/Users";
import FormUsers from "@/components/users/FormUsers";
import ConfirmModal from "@/components/modal/ConfirmModal";
import initialUsers from "@/data/users.json";
import AdminLayout from "@/app/admin/AdminLayout";

type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editUser, setEditUser] = useState<User>();
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string>();

  const confirmDeleteUser = async () => {
    if (!userToDelete) return;

    setIsDeleting(true);
    setDeleteError(undefined);

    try {
      const response = await fetch(`/api/users?id=${userToDelete.id}`, { method: "DELETE" });

      if (!response.ok) {
        setDeleteError("No se pudo borrar el usuario. Inténtalo de nuevo.");
        return;
      }

      setUsers((currentUsers) => currentUsers.filter((user) => user.id !== userToDelete.id));
      setUserToDelete(null);
    } catch {
      setDeleteError("No se pudo borrar el usuario. Inténtalo de nuevo.");
    } finally {
      setIsDeleting(false);
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
        <>
          <Users
            users={users}
            onEditUser={(id) => setEditUser(users.find((user) => user.id === id))}
            onDeleteUser={(id) => {
              setDeleteError(undefined);
              setUserToDelete(users.find((user) => user.id === id) ?? null);
            }}
          />
          {userToDelete && (
            <ConfirmModal
              user={userToDelete}
              onConfirm={confirmDeleteUser}
              onCancel={() => {
                setUserToDelete(null);
                setDeleteError(undefined);
              }}
              isDeleting={isDeleting}
              errorMessage={deleteError}
            />
          )}
        </>
      }
    />
  );
}