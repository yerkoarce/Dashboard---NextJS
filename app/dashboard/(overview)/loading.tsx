import DashboardSkeleton from "@/app/ui/skeletons";
import LatestInvoicesSkeleton from "@/app/ui/skeletons";
import CardSkeleton from "@/app/ui/skeletons";
import React from "react";

export default function Loading() {
  return (
    <>
      <CardSkeleton />
      <DashboardSkeleton />
      <LatestInvoicesSkeleton />
    </>
  );
}
