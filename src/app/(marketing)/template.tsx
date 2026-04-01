import { SiteHeader } from "@/components/site-header";

export default function MarketingTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="marketing-page-enter fixed inset-x-0 top-0 z-40 w-full">
        <SiteHeader />
      </div>
      <main className="flex min-h-0 flex-1 flex-col pt-14 md:pt-16">
        <div className="marketing-page-enter flex min-h-0 min-w-0 flex-1 flex-col">
          {children}
        </div>
      </main>
    </>
  );
}
