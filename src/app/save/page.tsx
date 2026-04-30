"use client";

export const dynamic = "force-dynamic";
import DashboardLayout from "@/components/DashboardLayout";
import SmartSavings from "@/components/SmartSavings";
import RecentTransactions from "@/components/RecentTransactions";

export default function SavePage() {
  return (
    <DashboardLayout>
      <div style={{ marginBottom: "30px" }}>
        <h1 className="text-gradient" style={{ fontSize: "2rem" }}>
          Savings Hub
        </h1>
        <p style={{ color: "var(--text-muted)", marginTop: "5px" }}>
          Manage your daily savings and hit your financial goals.
        </p>
      </div>

      <div className="grid-dashboard">
        <SmartSavings />
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
}
