import React from 'react'
import Nav from '../components/Nav2.jsx';
import TodaysAttendance from '../components/TodaysAttendance.jsx';

const attendanceData = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).todaysAttendance : [];


function AttendancePage() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950">
            <Nav />
            <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-start">
                <div className='grid grid-cols-1 gap-1'>
                    {/* CARDS */}
                    <div className="rounded-xl border border-neutral-800 bg-neutral-900">
                        <div className="p-4 border-b border-neutral-800">
                            <h2 className="text-white font-semibold">Overview</h2>
                        </div>
                        <div className="p-4">
                            <div className="rounded-xl border border-neutral-800 bg-neutral-900">
                                <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                                    <div>
                                        <div className="text-white font-semibold">Today's Attendance</div>
                                        <div className="text-neutral-400 text-xs">Date: 2026-03-25</div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="space-y-2">
                                        {
                                            attendanceData.map((attendance, index) => (
                                                <TodaysAttendance key={index} subject={attendance.subject} markedBy={attendance.markedBy} status={attendance.status} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendancePage
