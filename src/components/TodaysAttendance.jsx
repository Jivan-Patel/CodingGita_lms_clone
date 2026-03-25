import React from 'react'

function TodaysAttendance({subject, markedBy, status}) {
    return (
        <>
            <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                <div className="text-neutral-200 text-sm">
                    <div>{subject}</div>
                    <div className="text-xs text-neutral-400">Marked by: {markedBy}</div>
                </div>
                <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs border-emerald-800 bg-emerald-950 text-emerald-300">{status}</span>
            </div>
        </>
    )
}

export default TodaysAttendance
