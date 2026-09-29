import type { ReactNode } from "react";
import Menu from "@/components/navigation/Menu";

type AdminLayoutProps = {
  form: ReactNode;
  table: ReactNode;
  title: string;
};

export default function AdminLayout({
  form,
  table,
  title
}: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Menu />

      <main className="flex min-w-0 flex-1 flex-col gap-6 p-6">
        <h1 className="text-2xl font-semibold text-slate-800">
          {title}
        </h1>

        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row">
          <div className="min-w-0 flex-1">
            {form}
          </div>

          <div className="w-full lg:w-80">
            {table}
          </div>
        </div>
      </main>
    </div>
  );
}