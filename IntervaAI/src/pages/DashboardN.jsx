import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../config/API";
import toast from "react-hot-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import {
  TrendingUp,
  Clock,
  Target,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  LayoutDashboard,
  Activity,
  BarChart2,
  FileUser,
} from "lucide-react";
import { useMemo } from "react";
import { useAuth } from "../config/AuthContext";


const DashboardN = () => {
  const [details, setDetails] = useState([]);

  const { user } = useAuth();

  const fetchALLInterviewSummaries = async () => {
    try {
      const response = await api.get(import.meta.env.VITE_INTERVIEW_REPORT);
      setDetails(response?.data?.data);
    } catch (error) {
      console.log(error);
      toast.error("Error while fetching details");
    }
  };

  useEffect(() => {
    fetchALLInterviewSummaries();
  }, []);

  // Resume score will be capured in profile model and will be updated when the resume is analyzed
  const chartData = useMemo(() => {
    return details
      .map((d, index) => ({
        name: `Attempt ${index + 1}`,
        percentile: parseFloat(d.overallPercentile.toFixed(2)),
        dsa: d.scores.dsa.score || d.scores.dsa,
        apti: d.scores.apti,
        hr: d.scores.hr,
        date: new Date(d.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
      }))
      .reverse(); // Reverse to show chronological order (left to right)
  }, [details]);

  // 2. Global Stats Calculation
  const avgPercentile = (
    details?.reduce((acc, curr) => acc + curr.overallPercentile, 0) /
    details.length
  ).toFixed(1);
  const totalTests = details?.length;
  const latestAttempt = details[0]; // Assuming index 0 is most recent

  // 3. Difficulty Pie Data
  const difficultyData = useMemo(() => {
    const counts = details?.reduce((acc, curr) => {
      acc[curr.difficulty] = (acc[curr.difficulty] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).map((key) => ({
      name: key,
      value: counts[key],
    }));
  }, [details]);

  const COLORS = ["#6366f1", "#10b981", "#f59e0b"];

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-slate-300 p-6 font-sans">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-3">
            <LayoutDashboard className="text-indigo-500" />
            Interview Analytics
          </h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
            Real-time Performance Tracking
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800">
          <span className="text-[10px] font-bold px-4 text-slate-400">
            User ID: {latestAttempt?.userId.slice(-6)}
          </span>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <StatCard
          label="Total Attempts"
          value={totalTests}
          icon={Activity}
          color="text-indigo-400"
        />
        <StatCard
          label="Avg. Percentile"
          value={`${avgPercentile}%`}
          icon={Target}
          color="text-emerald-400"
        />
        <StatCard
          label="Total Time Spent"
          value={`${details.reduce((a, b) => a + b.timeAnalysis.totalTimeTaken, 0)}m`}
          icon={Clock}
          color="text-amber-400"
        />
        <StatCard
          label="Current Status"
          value={latestAttempt?.attemptStatus}
          icon={Award}
          color="text-violet-400"
        />
        <StatCard
          label="Resume Score"
          value={(user?.resume_score)? `${user.resume_score}%` : "Not Analyzed"}
          icon={FileUser}
          color="text-violet-400"
        />
      </div>

      {/* Charts Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trend Chart (Line Chart) */}
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp size={18} className="text-indigo-500" /> Percentile
              Progress
            </h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorPerc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  stroke="#64748b"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #1e293b",
                    borderRadius: "12px",
                  }}
                  itemStyle={{ fontSize: "12px", fontWeight: "bold" }}
                />
                <Area
                  type="monotone"
                  dataKey="percentile"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorPerc)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Difficulty Distribution (Pie Chart) */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
          <h3 className="text-sm font-bold text-white mb-6">
            Difficulty Distribution
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={difficultyData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {difficultyData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ fontSize: "10px", paddingTop: "20px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sectional Performance (Bar Chart) */}
        <div className="lg:col-span-3 bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
          <h3 className="text-sm font-bold text-white mb-6">
            Sectional Scores Breakdown (Across Attempts)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barGap={8}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="#64748b"
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    borderRadius: "12px",
                    border: "1px solid #1e293b",
                  }}
                />
                <Legend
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ fontSize: "10px", paddingBottom: "20px" }}
                />
                <Bar
                  dataKey="dsa"
                  fill="#6366f1"
                  radius={[4, 4, 0, 0]}
                  barSize={25}
                  name="DSA"
                />
                <Bar
                  dataKey="apti"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  barSize={25}
                  name="Aptitude"
                />
                <Bar
                  dataKey="hr"
                  fill="#f59e0b"
                  radius={[4, 4, 0, 0]}
                  barSize={25}
                  name="HR"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon: Icon, color }) => (
  <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl flex items-center gap-5 hover:border-slate-700 transition-all group">
    <div
      className={`p-4 rounded-2xl bg-slate-950 border border-slate-800 transition-colors group-hover:bg-slate-800`}
    >
      <Icon className={`${color} w-6 h-6`} />
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
        {label}
      </p>
      <h2 className="text-xl font-black text-white capitalize">{value}</h2>
    </div>
  </div>
);

export default DashboardN;
