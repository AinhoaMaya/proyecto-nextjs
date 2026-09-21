import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
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
  const user = {
    id: users.reduce((highestId, currentUser) => Math.max(highestId, currentUser.id), 0) + 1,
    name,
    lastname,
    email,
  };

  await fs.writeFile(usersFile, JSON.stringify([...users, user], null, 2) + "\n");

  return NextResponse.json(user, { status: 201 });
}