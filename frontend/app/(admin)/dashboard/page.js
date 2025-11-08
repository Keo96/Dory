"use client";

import StatCard from "@/components/StatCard";
import { Users, BookOpen, Clock, CheckCircle } from "lucide-react";
import { resourceUsageData, COLORS } from "@/data/mock";
import {
  BarChart as RBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart as RPieChart, Pie, Cell, Label,
} from "recharts";

export default function DashboardPage() {
  const total = resourceUsageData.reduce((a, c) => a + c.value, 0);

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Student Resource Tracker</h1>
      <p className="text-gray-600 mt-1">Monitor and analyze student engagement.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <StatCard title="Total Students" value="1,280" details="140 Active" icon={Users} active />
        <StatCard title="Resources Accessed" value="8,450" icon={BookOpen} />
        <StatCard title="Avg. Time Spent" value="42 min" icon={Clock} />
        <StatCard title="Completion Rate" value="78.5%" icon={CheckCircle} />
      </div>

      <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">Resource Usage by Type</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* bar */}
        <div className="p-6 bg-white rounded-xl shadow-sm h-96 border">
          <h3 className="font-medium text-gray-700 mb-4">Usage Breakdown</h3>
          <ResponsiveContainer width="100%" height="100%">
            <RBarChart data={resourceUsageData} margin={{ top: 5, right: 20, bottom: 40, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" angle={-15} textAnchor="end" height={60} interval={0} tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" name="Access Count" radius={[4, 4, 0, 0]} fill="#2563eb" />
            </RBarChart>
          </ResponsiveContainer>
        </div>

        {/* pie */}
        <div className="p-6 bg-white rounded-xl shadow-sm h-96 border">
          <h3 className="font-medium text-gray-700 mb-4">Usage Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <RPieChart>
              <Pie data={resourceUsageData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={5} dataKey="value">
                {resourceUsageData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                <Label value="Total Usage" position="center" dy={-10} />
                <Label value={total} position="center" dy={15} />
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </RPieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
