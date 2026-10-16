
import { useState } from "react";
import AttendanceCard from "../components/AttendanceCard";

import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
 

const initialStudents = [
  {
    id: "S001",
    name: "Kamal Perera",
    course: "Information Technology",
    image: image1,
    status: "Present",
    present: 20,
    absent: 2,
  },
  {
    id: "S002",
    name: "Nimal Silva",
    course: "Software Engineering",
    image: image2,
    status: "Absent",
    present: 18,
    absent: 4,
  },
  {
    id: "S003",
    name: "Amali Fernando",
    course: "Information Technology",
    image: image3,
    status: "Present",
    present: 22,
    absent: 1,
  },
  {
    id: "S004",
    name: "Saman Kumara",
    course: "Networking",
    image: image4,
    status: "Absent",
    present: 17,
    absent: 5,
  },
  {
    id: "S005",
    name: "Kavindi Silva",
    course: "Software Engineering",
    image: image5,
    status: "Present",
    present: 21,
    absent: 2,
  },
];

function AttendanceDashboard() {
  const [students, setStudents] = useState(initialStudents);

  function changeStatus(id, newStatus) {
    setStudents((previousStudents) =>
      previousStudents.map((student) => {
        if (student.id !== id) {
          return student;
        }

        // Same status என்றால் கணக்கை மாற்ற வேண்டாம்
        if (student.status === newStatus) {
          return student;
        }

        const wasPresent = student.status === "Present";
        const willBePresent = newStatus === "Present";

        return {
          ...student,
          status: newStatus,
          present: student.present + (willBePresent ? 1 : -1),
          absent: student.absent + (willBePresent ? -1 : 1),
        };
      })
    );
  }

  const totalPresent = students.reduce(
    (sum, student) => sum + student.present,
    0
  );

  const totalAbsent = students.reduce(
    (sum, student) => sum + student.absent,
    0
  );

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Student Management
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Attendance Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Manage and monitor student attendance.
          </p>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Students</p>
            <p className="mt-2 text-3xl font-bold text-indigo-600">
              {students.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Present Days
            </p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {totalPresent}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Absent Days
            </p>
            <p className="mt-2 text-3xl font-bold text-red-600">
              {totalAbsent}
            </p>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">
              Student List
            </h2>

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
              {students.length} Students
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => (
              <AttendanceCard
                key={student.id}
                student={student}
                onStatusChange={changeStatus}
              />
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-slate-500">
          Student Attendance Management System
        </footer>
      </div>
    </main>
  );
}

export default AttendanceDashboard;
