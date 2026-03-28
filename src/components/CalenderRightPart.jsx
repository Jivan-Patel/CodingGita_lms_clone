import React from 'react'

function CalenderRightPart() {
    return (
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 lg:col-span-1">
            <div className="p-4 border-b border-neutral-800">
                <div className="text-white font-semibold">28/03/2026</div>
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <div className="text-neutral-300 font-medium mb-2">Events</div>
                    <div className="text-neutral-500 text-sm">No events.</div>
                </div>
                <div className="mb-4">
                    <div className="text-neutral-300 font-medium mb-2">Leaves</div>
                    <div className="text-neutral-500 text-sm">No leaves.</div>
                </div>
                <div className="mb-4">
                    <div className="text-neutral-300 font-medium mb-2">Attendance</div>
                    <div className="space-y-2 text-sm">
                        <div className="space-y-1">
                            <div className="text-neutral-400">Subject entries:</div>
                            <div className="text-neutral-200 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <span>ReactJS — present</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-neutral-300 font-medium mb-2">Assignments</div>
                    <div className="text-neutral-500 text-sm">None due.</div>
                </div>
            </div>
        </div>
    )
}

export default CalenderRightPart
