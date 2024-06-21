import { Navbar } from '@/components/navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-4">
        {children}
      </section>
    </div>
  );
}
