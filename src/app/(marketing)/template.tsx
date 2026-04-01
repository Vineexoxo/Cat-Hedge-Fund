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
      <main className="flex min-h-0 flex-1 flex-col pt-[calc(6.75rem+env(safe-area-inset-top,0px))] sm:pt-16 md:pt-[4.75rem] lg:pt-20">
        <div className="marketing-page-enter flex min-h-0 min-w-0 flex-1 flex-col">
          {children}
        </div>
      </main>
    </>
  );
}
