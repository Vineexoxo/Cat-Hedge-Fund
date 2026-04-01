"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Role = {
  title: string;
  desc: string;
};

export function CareerApplyRows({ roles }: { roles: readonly Role[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setOpen(false), 1000);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <>
      <div className="space-y-0 divide-y divide-border">
        {roles.map((role) => (
          <div
            key={role.title}
            className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium text-foreground">{role.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{role.desc}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              type="button"
              className="shrink-0 self-start"
              onClick={() => setOpen(true)}
            >
              Apply
            </Button>
          </div>
        ))}
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="rejection-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-6 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        >
          <p
            id="rejection-title"
            className="font-sans pointer-events-none max-w-[min(100%,42rem)] select-none text-center text-2xl leading-tight font-normal tracking-tight text-red-600 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Underqualified, Rejected!
          </p>
        </div>
      ) : null}
    </>
  );
}
