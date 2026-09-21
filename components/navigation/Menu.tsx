import NavLinks from "./NavLinks";

export default function Menu() {
  return (
    <nav className="flex min-h-screen w-64 flex-col bg-[#18253D] text-white">
      <div className="flex h-16 items-center gap-3 border-b border-slate-700 px-5">
        <span className="text-sm font-semibold">Panel de administración</span>
      </div>

      <div className="px-3 py-5">
        <NavLinks />
      </div>
    </nav>
  );
}