import { PieChart as PieChartIcon } from "lucide-react";

export default function StatCard({ title, value, details, icon: Icon, active = false }) {
  const IconComp = Icon || PieChartIcon;
  return (
    <div className={`p-6 bg-white rounded-xl shadow-sm border transition hover:shadow-md ${active ? "ring-2 ring-blue-500" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${active ? "bg-blue-100" : "bg-gray-100"}`}>
            <IconComp className={`h-6 w-6 ${active ? "text-blue-600" : "text-gray-600"}`} />
          </div>
          <span className="text-gray-500 font-medium">{title}</span>
        </div>
        {details && <span className="text-xs font-semibold px-2.5 py-1 bg-green-100 text-green-700 rounded-full">{details}</span>}
      </div>
      <div className="mt-4">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
}
