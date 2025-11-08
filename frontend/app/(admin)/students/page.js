import { mockStudents } from "@/data/mock";

export default function StudentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Student Compliance Log</h1>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Name","Email","Resources","Compliance Status","Last Active"].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockStudents.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{s.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{s.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{s.resources}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${s.status === "IEP Compliant" ? "bg-green-100 text-green-800" : ""}
                    ${s.status === "Pending Review" ? "bg-yellow-100 text-yellow-800" : ""}
                    ${s.status === "At Risk" ? "bg-red-100 text-red-800" : ""}`}>
                    {s.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{s.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
