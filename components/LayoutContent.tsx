"use client";

import Footer from "@/components/Footer";

export function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
      <div className="h-px bg-secondary w-full mt-20"></div>
      <Footer />
    </div>
  );
}
