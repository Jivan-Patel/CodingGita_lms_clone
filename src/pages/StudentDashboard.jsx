import React from "react";
import { loginCredentials } from "../utils/auth.js";

import Navbar from "../components/Nav2.jsx";
import TopCard from "../components/TopCard.jsx";
import AttendanceCard from "../components/AttendanceCard.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import SubjectsCard from "../components/SubjectCard.jsx";
import MentorsCard from "../components/MentorsCard.jsx";
import AssignmentsCard from "../components/AssignmentsCard.jsx";
import EventsCard from "../components/EventCard.jsx";
import SmallCard from "../components/SmallCard.jsx";

export default function StudentDashboard() {
  const data = localStorage.getItem("user");
  const user = loginCredentials;

  if (!user) return <div>No user</div>;

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white">
      <Navbar />

      <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-start">
        {/* TOP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <TopCard title="University" value={user.university} />
          <TopCard title="UID" value={user.uid} />
          <TopCard title="Subjects" value={user.subjects.length} />
        </div>

        {/* ATTENDANCE */}
        <AttendanceCard attendance={user.attendance} />

        {/* PROFILE + SUBJECTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <ProfileCard user={user} />
          <SubjectsCard subjects={user.subjects} />
        </div>

        {/* MENTORS */}
        <MentorsCard mentors={user.mentors} />

        {/* ASSIGNMENTS */}
        <AssignmentsCard
          assignments={user.assignments}
          pending={user.pendingAssignments}
        />

        {/* EVENTS */}
        <EventsCard events={user.events} />

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SmallCard title="Need help?" text="Contact your mentor" />

          <SmallCard title="Timetable" text="Check classes (coming soon)" />

          <SmallCard title="Chat" text="View Chat Groups" link />
        </div>
      </div>

    </div>
  );
}