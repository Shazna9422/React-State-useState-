
function AttendanceCard({ student, onStatusChange }) {
  const isPresent = student.status === "Present";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4">
       <img
    src={student.image}
    alt={student.name}
    className="h-24 w-24 rounded-full border-4 border-indigo-100 object-cover"
    onError={(e) => {
      console.error("Image failed to load:", e.currentTarget.src);
    }}
  />
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            {student.name}
          </h2>

          <p className="text-sm text-slate-500">
            ID: {student.id}
          </p>

          <p className="text-sm text-indigo-600">
            {student.course}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
            isPresent
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {student.status}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-green-50 p-3 text-center">
          <p className="text-sm text-green-700">Present Days</p>
          <p className="mt-1 text-2xl font-bold text-green-800">
            {student.present}
          </p>
        </div>

        <div className="rounded-xl bg-red-50 p-3 text-center">
          <p className="text-sm text-red-700">Absent Days</p>
          <p className="mt-1 text-2xl font-bold text-red-800">
            {student.absent}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => onStatusChange(student.id, "Present")}
          disabled={isPresent}
          className="flex-1 rounded-lg bg-green-600 px-3 py-2 font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Present
        </button>

        <button
          onClick={() => onStatusChange(student.id, "Absent")}
          disabled={!isPresent}
          className="flex-1 rounded-lg bg-red-600 px-3 py-2 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Absent
        </button>
      </div>
    </div>
  );
}

export default AttendanceCard;
