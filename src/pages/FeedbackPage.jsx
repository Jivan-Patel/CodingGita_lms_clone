import React from 'react'
import Nav from '../components/Nav2.jsx'

function FeedbackPage() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950">
            <Nav />
            <div className="mx-auto pb-10 mt-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-start">
                <div className="mb-8 flex justify-around">
                    <h1 className="text-4xl font-bold mb-1">Feedback</h1>
                    <button className='block px-6 font-medium py-2 bg-blue-600 rounded-xl hover:bg-blue-700'>
                        + Create Feedback
                    </button>
                </div>
                <div className='space-y-6'>
                    <div className='text-center py-12'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square w-16 h-16 text-neutral-600 mx-auto mb-4" aria-hidden="true"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                        <h2 className='text-xl text-center text-neutral-400'>No feedback yet</h2>
                        <p className='text-center text-neutral-500'>Share your thoughts and help us improve!</p>
                        <button className='px-6 py-2 my-10 font-medium bg-blue-600 rounded-xl hover:bg-blue-700'>
                            Submit Your First Feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackPage
