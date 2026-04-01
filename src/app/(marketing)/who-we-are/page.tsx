import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { catImages } from "@/lib/cat-images";
import { bentoCard, cultureValues } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who we are | Aloo Tikki Hedge Funds",
  description:
    "About the firm, culture, and the Nap-Time Alpha strategy. Senior-most quant: Aloo Tikki.",
};

export default function WhoWeArePage() {
  return (
    <div className="flex w-full min-w-0 flex-col px-4 py-8 md:px-6 md:py-10 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12">
          <Card
            className={cn(
              bentoCard,
              "lg:col-span-4 lg:flex lg:min-h-[280px] lg:flex-col lg:items-center lg:justify-between"
            )}
          >
            <CardContent className="flex flex-1 flex-col items-center justify-center gap-4 pt-6 pb-2">
              <Avatar
                className="size-44 border border-border md:size-52"
                size="lg"
              >
                <AvatarImage
                  src={catImages.cioPortrait}
                  alt="Aloo Tikki, Senior-most Quant"
                />
                <AvatarFallback className="rounded-full bg-muted text-sm font-medium text-muted-foreground">
                  AT
                </AvatarFallback>
              </Avatar>
              <p className="text-center text-sm font-medium text-foreground">
                Aloo Tikki, Senior-most Quant
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span
                  className="size-2 shrink-0 rounded-full bg-foreground"
                  aria-hidden
                />
                <span>Currently Napping / Markets Active.</span>
              </div>
            </CardContent>
          </Card>

          <Card className={cn(bentoCard, "lg:col-span-8")}>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">
                About Aloo Tikki Hedge Funds
              </CardTitle>
              <CardDescription>
                A brief, entirely serious history.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="max-w-4xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                Aloo Tikki Hedge Funds was established in 2026 with a single
                mandate: to sit at the intersection of sunbeams and
                spreadsheets. From our headquarters in a carpet-adjacent suite
                (with satellite presence near the kitchen), we pursue a singular
                ambition: to be recognized among the world&apos;s foremost
                paw-prietary desks for conviction, curiosity, and carefully
                rationed kibble. We do not race the exchange clock; we outwait
                it.
              </p>
            </CardContent>
          </Card>

          <Card className={cn(bentoCard, "lg:col-span-12")}>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                The Nap-Time Alpha Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="max-w-4xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                We target high-net-worth individuals who have{" "}
                <strong className="font-medium text-foreground">
                  too much money but too little time
                </strong>
                . Human managers rely on data; Aloo Tikki relies on dynamic
                territorial mapping. If the cat sits on a stock ticker, we go
                long. If the cat bats it off the desk, we liquidate.{" "}
                <strong className="font-medium text-foreground">
                  No emotions, just instinct.
                </strong>
              </p>
            </CardContent>
          </Card>

          <Card className={cn(bentoCard, "lg:col-span-12")}>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                A fine place to nap and innovate
              </CardTitle>
              <CardDescription className="text-base">
                Our team is shaped by a culture of excellence and occasionally
                string. Each of us contributes to our own success and, when
                convenient, to the group nap.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {cultureValues.map((item) => (
                  <div
                    key={item.n}
                    className="border-b border-border pb-4 last:border-b-0 md:border-b-0 md:pb-0"
                  >
                    <p className="text-xs font-medium text-muted-foreground">
                      {item.n}. {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
