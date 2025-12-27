import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/Axios";
import {
  LayoutDashboard,
  ClipboardList,
  PlusCircle,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

/* =========================
   DASHBOARD
========================= */
export default function Dashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    stats: {},
    recentRequests: [],
    teamStats: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  /* =========================
     FETCH DATA
  ========================= */
  const fetchDashboardData = useCallback(async () => {
    try {
      setRefreshing(true);
      setError("");

      const [requestsRes, teamsRes] = await Promise.all([
        api.get("/core/requests"),
        api.get("/core/teams"),
      ]);

      const requests = requestsRes?.data?.data || [];
      const teams = teamsRes?.data || [];

      setData({
        stats: {
          totalRequests: requests.length,
          completed: requests.filter(r => r.status === "Completed").length,
          open: requests.filter(r => r.status !== "Completed").length,
        },
        recentRequests: requests.slice(0, 5),
        teamStats: teams,
      });
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (loading) return <LoadingScreen />;

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header
        onBoard={() => navigate("/maintenance")}
        onNew={() => navigate("/create")}
        onRefresh={fetchDashboardData}
        refreshing={refreshing}
      />

      {error && <ErrorBanner error={error} onRetry={fetchDashboardData} />}

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        <StatsGrid stats={data.stats} />
        <RecentRequests requests={data.recentRequests} />
        <TeamStats teams={data.teamStats} />
      </main>
    </div>
  );
}

/* =========================
   COMPONENTS
========================= */

const Header = ({ onBoard, onNew, onRefresh, refreshing }) => (
  <header className="flex items-center justify-between p-6 border-b border-slate-800">
    <div className="flex items-center gap-3">
      <LayoutDashboard />
      <h1 className="text-xl font-bold">GearGuard</h1>
    </div>
    <div className="flex gap-3">
      <Button icon={ClipboardList} label="Board" onClick={onBoard} />
      <Button icon={PlusCircle} label="New" onClick={onNew} />
      <button onClick={onRefresh} disabled={refreshing}>
        <RefreshCw className={refreshing ? "animate-spin" : ""} />
      </button>
    </div>
  </header>
);

const Button = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded"
  >
    <Icon size={16} />
    {label}
  </button>
);

const StatsGrid = ({ stats }) => (
  <div className="grid grid-cols-3 gap-4">
    <Stat title="Total" value={stats.totalRequests} />
    <Stat title="Open" value={stats.open} />
    <Stat title="Completed" value={stats.completed} />
  </div>
);

const Stat = ({ title, value }) => (
  <div className="bg-slate-800 p-4 rounded">
    <p className="text-sm text-slate-400">{title}</p>
    <p className="text-2xl font-bold">{value ?? 0}</p>
  </div>
);

const RecentRequests = ({ requests }) => (
  <section className="bg-slate-800 p-4 rounded">
    <h2 className="font-semibold mb-2">Recent Requests</h2>
    {requests.length === 0 ? (
      <p className="text-slate-400">No requests</p>
    ) : (
      <ul className="space-y-1">
        {requests.map((r, i) => (
          <li key={i} className="text-sm">
            {r.subject || "Untitled"}
          </li>
        ))}
      </ul>
    )}
  </section>
);

const TeamStats = ({ teams }) => (
  <section className="bg-slate-800 p-4 rounded">
    <h2 className="font-semibold mb-2">Teams</h2>
    {teams.length === 0 ? (
      <p className="text-slate-400">No teams</p>
    ) : (
      teams.map((t, i) => (
        <p key={i} className="text-sm">
          {t.name || "Unnamed Team"}
        </p>
      ))
    )}
  </section>
);

const LoadingScreen = () => (
  <div className="h-screen flex items-center justify-center text-xl">
    Loading Dashboard...
  </div>
);

const ErrorBanner = ({ error, onRetry }) => (
  <div className="bg-red-900 text-red-100 p-4 flex items-center gap-4">
    <AlertCircle />
    <span>{error}</span>
    <button onClick={onRetry} className="underline">
      Retry
    </button>
  </div>
);
