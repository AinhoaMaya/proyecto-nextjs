import Menu from "@/components/navigation/Menu";

export default function Admin() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Menu />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-slate-800">Página de Inicio</h1>
      </main>
    </div>
  );
}