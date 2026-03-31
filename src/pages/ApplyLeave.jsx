import React, { useState } from 'react'
import Nav from '../components/Nav2.jsx';
import { data } from 'react-router-dom';
import LeaveCard from '../components/LeaveCard.jsx';

function ApplyLeave() {
    const leaveData = JSON.parse(localStorage.getItem('leave')) || [];
    const [formData, setFormData] = useState({
        category: "",
        fromDate: "",
        toDate: "",
        leaveTime: "",
        returnTime: "",
        remarks: "",
        appliedOn: new Date().toLocaleDateString()
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
        })
        console.log(formData);
        leaveData.push(formData);
        localStorage.setItem('leave', JSON.stringify(leaveData));
        setFormData({
            category: "",
            fromDate: "",
            toDate: "",
            leaveTime: "",
            returnTime: "",
            remarks: ""
        })
    }
    const isDisabled = !formData.category || !formData.fromDate || !formData.toDate || !formData.leaveTime || !formData.returnTime;

    return (
        <div className="min-h-screen pt-20 bg-neutral-950">
            <Nav />
            <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-start">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-1">Apply for Leave</h1>
                    <p className="text-neutral-400">Submit your leave application and track your requests</p>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <div className="text-2xl font-bold text-neutral-100">{leaveData.length}</div>
                        <div className="text-sm text-neutral-400">Total Applications</div>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-300">0</div>
                        <div className="text-sm text-neutral-400">Pending Review</div>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-300">{leaveData.length}</div>
                        <div className="text-sm text-neutral-400">Approved</div>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <div className="text-2xl font-bold text-red-300">0</div>
                        <div className="text-sm text-neutral-400">Rejected</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Application Form */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-neutral-400 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">New Leave Application</h2>
                                <p className="text-sm text-neutral-400">Fill out the form to submit your leave request</p>
                            </div>
                        </div>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-neutral-200 mb-2">Leave Category</label>
                                <select className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors" value={formData.category} name="category" onChange={(e) => handleChange(e)}>
                                    <option value="">Select category</option>
                                    <option value="Personal reasons">Personal reasons</option>
                                    <option value="Festival celebration">Festival celebration</option>
                                    <option value="Hackathon participation">Hackathon participation</option>
                                    <option value="College events (seminars, workshops, competitions, etc.)">College events (seminars, workshops, competitions, etc.)</option>
                                    <option value="Sick leave / medical reasons">Sick leave / medical reasons</option>
                                    <option value="Placement drives">Placement drives</option>
                                    <option value="Company work (official tasks or visits)">Company work (official tasks or visits)</option>
                                    <option value="Interviews">Interviews</option>
                                    <option value="Family functions">Family functions</option>
                                    <option value="Emergency situations">Emergency situations</option>
                                    <option value="Travel-related reasons">Travel-related reasons</option>
                                    <option value="Duty leave">Duty leave</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-200 mb-2">From Date</label>
                                    <input className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="date" value={formData.fromDate} name="fromDate" onChange={(e) => handleChange(e)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-200 mb-2">To Date</label>
                                    <input className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="date" value={formData.toDate} name="toDate" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-200 mb-2">Leave Time</label>
                                    <input className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="time" value={formData.leaveTime} name="leaveTime" onChange={(e) => handleChange(e)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-200 mb-2">Return Time</label>
                                    <input className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="time" value={formData.returnTime} name="returnTime" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-200 mb-2">Additional Remarks (Optional)</label>
                                <textarea className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " rows="4" name="remarks" value={formData.remarks} onChange={(e) => handleChange(e)}>

                                </textarea>
                            </div>

                            <button type="submit" disabled={isDisabled} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors" onClick={handleSubmit}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z">
                                    </path>
                                </svg>
                                Submit Leave Application
                            </button>

                        </form>
                    </div>
                    {/* Leave Requests */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-neutral-400 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">My Leave Requests</h2>
                                <p className="text-sm text-neutral-400">Track the status of your applications</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {
                                leaveData.length === 0 && (
                                    <div className="text-center text-neutral-500 py-10">
                                        <p className="text-sm">No leave applications found.</p>
                                    </div>
                                )
                            }
                            {
                                leaveData.map((leave, index) => (
                                    <LeaveCard key={index} data={leave} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ApplyLeave
