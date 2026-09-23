import type { ReactNode } from "react";

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
    <main className="flex min-h-screen flex-col gap-6 bg-slate-50 p-6">
      <h1 className="text-2xl font-semibold text-slate-800">
        {title}
      </h1>

      <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row">
        <div className="w-full lg:w-80">
          {form}
        </div>

        <div className="min-w-0 flex-1">
          {table}
        </div>
      </div>
    </main>
  );
}