import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CareerApplyRows } from "@/components/career-apply-rows";
import { bentoCard, careerRoles } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to join | Aloo Tikki Hedge Funds",
  description:
    "Open roles: Software Engineer and Quantitative Researcher (Cat). Talent plus instinct.",
};

export default function HowToJoinPage() {
  return (
    <div className="flex w-full min-w-0 flex-col px-4 py-8 md:px-6 md:py-10 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12">
          <Card className={cn(bentoCard, "lg:col-span-12")}>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">We are hiring</CardTitle>
              <CardDescription className="text-base">
                Talent plus instinct. We like people who have too much money but
                too little time (or aspire to the lifestyle). Two open roles
                below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CareerApplyRows roles={careerRoles} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
