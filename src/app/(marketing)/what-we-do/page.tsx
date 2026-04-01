import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlphaChartStub } from "@/components/sections/alpha-chart-stub";
import { bentoCard, whitelistRows } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What we do | Aloo Tikki Hedge Funds",
  description:
    "Illustrative performance, desk mandate, and current universe. Indian markets.",
};

export default function WhatWeDoPage() {
  return (
    <div className="flex w-full min-w-0 flex-col px-4 py-8 md:px-6 md:py-10 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12">
          <Card className={cn(bentoCard, "lg:col-span-12")}>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                Desk mandate
              </CardTitle>
              <CardDescription className="text-base">
                Trading and technology, built for resilience and treats-adjusted
                outcomes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  Our team includes engineers and cats working tirelessly to
                  build and improve one of the most resilient trading systems in
                  the world while growing a multitude of algorithms.
                </p>
                <p>
                  We work with people who have{" "}
                  <strong className="font-medium text-foreground">
                    too much money but too little time
                  </strong>
                  . We trade in the Indian market. Leverage the pure instinct of
                  feline intuition.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className={cn(
              bentoCard,
              "overflow-hidden lg:col-span-12 lg:min-h-[320px]"
            )}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Performance (Illustrative)</CardTitle>
              <CardDescription>
                Compounded treats-adjusted returns vs. benchmark indifference.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col pb-4">
              <AlphaChartStub />
            </CardContent>
          </Card>

          <Card className={cn(bentoCard, "lg:col-span-12")}>
            <CardHeader>
              <CardTitle className="text-lg">
                Aloo Tikki&apos;s Current Universe
              </CardTitle>
              <CardDescription>
                Illustrative names and ratings. We trade in the Indian market.
              </CardDescription>
            </CardHeader>
            <CardContent className="min-w-0 px-0 sm:px-4">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-muted-foreground">
                      Listed Name
                    </TableHead>
                    <TableHead className="text-muted-foreground">
                      Tikki Ticker
                    </TableHead>
                    <TableHead className="text-muted-foreground">Price</TableHead>
                    <TableHead className="text-muted-foreground">
                      Tikki Rating
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {whitelistRows.map((row) => (
                    <TableRow key={row.ticker} className="border-border">
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell className="font-mono text-foreground">
                        {row.ticker}
                      </TableCell>
                      <TableCell className="tabular-nums text-muted-foreground">
                        {row.price}
                      </TableCell>
                      <TableCell>{row.rating}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
