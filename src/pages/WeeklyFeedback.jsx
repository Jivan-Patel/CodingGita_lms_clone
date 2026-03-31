import React from 'react'
import Nav from '../components/Nav2';

function WeeklyFeedback() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950">
            <Nav />
            <div className="max-w-6xl mx-auto">
                <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-center">
                    <h1 className="text-4xl font-bold text-neutral-100">Weekly Subject Feedback</h1>
                    <p className="text-neutral-400">Share your thoughts on this week's subjects</p>
                </div>
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-xl p-12 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open h-16 w-16 text-neutral-500 mx-auto mb-4" aria-hidden="true">
                        <path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    <h3 className="text-xl font-semibold text-neutral-300 mb-2">All Caught Up!</h3>
                    <p className="text-neutral-400">No subjects available for feedback at this time.</p>
                </div>
            </div>
        </div>
    )
}

export default WeeklyFeedback
