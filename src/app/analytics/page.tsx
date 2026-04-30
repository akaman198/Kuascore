"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { useAppContext } from "@/context/AppContext";

export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  const { user } = useAppContext();

  if (!user) return null;

  return (
    <DashboardLayout>
      <div style={{ marginBottom: "30px" }}>
        <h1 className="text-gradient" style={{ fontSize: "2rem" }}>
          Analytics & Profile
        </h1>
        <p style={{ color: "var(--text-muted)", marginTop: "5px" }}>
          View your overall financial footprint.
        </p>
      </div>

      <div
        className="glass-card animate-fade-in delay-100"
        style={{ marginBottom: "24px" }}
      >
        <h3 style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          User Profile
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Full Name
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>{user.name}</p>
          </div>
          <div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Phone Number
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              {user.phone}
            </p>
          </div>
          <div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Total Transactions
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              {user.transactions.length}
            </p>
          </div>
          <div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Current Score
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "var(--primary)",
              }}
            >
              {user.score} / 1000
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
