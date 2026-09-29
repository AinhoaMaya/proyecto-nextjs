import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
};

const usersFile = path.join(process.cwd(), "data", "users.json");

export async function POST(request: Request) {
  const body = await request.json();
  const name = body.name?.trim();
  const lastname = body.lastname?.trim();
  const email = body.email?.trim();

  if (!name || !lastname || !email) {
    return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
  }

  const users = JSON.parse(await fs.readFile(usersFile, "utf8")) as User[];
  const timestamp = new Date().toISOString();
  const user = {
    id: users.reduce((highestId, currentUser) => Math.max(highestId, currentUser.id), 0) + 1,
    name,
    lastname,
    email,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  await fs.writeFile(usersFile, JSON.stringify([...users, user], null, 2) + "\n");

  return NextResponse.json(user, { status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json();

  const id = Number(body.id);
  const name = body.name?.trim();
  const lastname = body.lastname?.trim();
  const email = body.email?.trim();

  if (!Number.isInteger(id) || !name || !lastname || !email) {
    return NextResponse.json({ error: "Datos de usuario no válidos" }, { status: 400 });
  }

  const users = JSON.parse(await fs.readFile(usersFile, "utf8")) as User[];
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  const updatedUser = {
    id,
    name,
    lastname,
    email,
    createdAt: users[userIndex].createdAt,
    updatedAt: new Date().toISOString(),
  };
  users[userIndex] = updatedUser;

  await fs.writeFile(usersFile, JSON.stringify(users, null, 2) + "\n");

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));

  if (!Number.isInteger(id)) {
    return NextResponse.json({ error: "Id no válido" }, { status: 400 });
  }

  const users = JSON.parse(await fs.readFile(usersFile, "utf8")) as User[];
  const remainingUsers = users.filter((user) => user.id !== id);

  if (remainingUsers.length === users.length) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  await fs.writeFile(usersFile, JSON.stringify(remainingUsers, null, 2) + "\n");

  return new Response(null, { status: 204 });
}