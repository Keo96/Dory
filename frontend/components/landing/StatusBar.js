export default function StatusBar({ message }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
      <p className="text-sm text-gray-700">
        Frontend is up. Backend status: <span className="font-medium">{message}</span>
      </p>
    </div>
  );
}
