import React from 'react';
import CalenderGrid from './CalenderGrid.jsx';

const LEGEND_ITEMS = [
    { color: 'bg-blue-500', label: 'Assignment' },
    { color: 'bg-rose-500', label: 'holiday' },
    { color: 'bg-red-500', label: 'exam' },
    { color: 'bg-orange-500', label: 'class test' },
    { color: 'bg-violet-500', label: 'result announcement' },
    { color: 'bg-cyan-500', label: 'orientation' },
    { color: 'bg-pink-500', label: 'convocation' },
    { color: 'bg-amber-500', label: 'Personal reasons' },
    { color: 'bg-orange-500', label: 'Festival celebration' },
    { color: 'bg-cyan-500', label: 'Hackathon participation' },
    {
        color: 'bg-blue-500',
        label: 'College events (seminars, workshops, competitions, etc.)',
    },
    { color: 'bg-red-500', label: 'Sick leave / medical reasons' },
    { color: 'bg-green-500', label: 'Placement drives' },
    { color: 'bg-indigo-500', label: 'Company work (official tasks or visits)' },
    { color: 'bg-teal-500', label: 'Interviews' },
    { color: 'bg-pink-500', label: 'Family functions' },
    { color: 'bg-rose-500', label: 'Emergency situations' },
    { color: 'bg-sky-500', label: 'Travel-related reasons' },
    { color: 'bg-purple-500', label: 'Duty leave' },
    { color: 'bg-neutral-500', label: 'Others' },
];

function CalenderCard() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 col-span-2 bg-neutral-900 border border-neutral-800 rounded-xl">
            <div className="border-b border-neutral-800 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <button
                            className="rounded border border-neutral-700 bg-neutral-800 px-2 py-1 hover:bg-neutral-700"
                            aria-label="Previous month"
                        >
                            ←
                        </button>
                        <button
                            className="rounded border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs hover:bg-neutral-700"
                            aria-label="Go to today"
                        >
                            Today
                        </button>
                    </div>
                    <div className="font-semibold">March 2026</div>
                    <button
                        className="rounded border border-neutral-700 bg-neutral-800 px-2 py-1 hover:bg-neutral-700"
                        aria-label="Next month"
                    >
                        →
                    </button>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-neutral-300 sm:grid-cols-3 md:grid-cols-4">
                    {LEGEND_ITEMS.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full ${item.color}`}></span>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <CalenderGrid />
        </div>
    );
}

export default CalenderCard;
