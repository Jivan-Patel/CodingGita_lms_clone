import React from 'react'
import Nav from '../components/Nav2.jsx';
import { loginCredentials } from '../utils/auth.js';
import ProfileDetailsCard from '../components/ProfileDetailsCard.jsx';

const profilePic = loginCredentials.image;

const profileDetails = [
    { label: "Enrollment Number", value: "enrollmentNumber" },
    { label: "Course", value: "course" },
    { label: "Branch", value: "branch" },
    { label: "Semester", value: "semester" },
    { label: "Gender", value: "gender" },
    { label: "Alternate Email", value: "alternativeEmail", isLink: true },
    { label: "Alternate Phone", value: "alternativePhone" },
    { label: "Guardian", value: "guardian" },
]

const contactDetails = [
    { label: "mobile", value: "mobile" },
    { label: "Email", value: "email", isLink: true },
    { label: "University Email", value: "email", isLink: true },
    { label: "Current Email", value: "alternativeEmail", isLink: true },
    { label: "Address", value: "address" },
    { label: "Portfolio", value: "portfolio", isLink: true },
    { label: "Resume", value: "resume", isLink: true },
    { label: "GitHub", value: "github", isLink: true },
    { label: "LinkedIn", value: "linkedin", isLink: true },
    { label: "Twitter", value: "twitter", isLink: true },
    { label: "YouTube", value: "youtube", isLink: true },
]

const academicDetails = [
    { label: "University", value: "university" },
    { label: "University UID", value: "uid" },
    { label: "Date of Birth", value: "dob" },
    { label: "Admission Year", value: "admissionYear" },
    { label: "Current Year", value: "currentYear" },
    { label: "Section", value: "section" },
    { label: "Subjects", value: "subjects" },
    { label: "Mentors", value: "mentor" },
]

function ProfilePage() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950">
            <Nav />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 space-y-6 text-start">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className='text-2xl font-bold text-white'>Profile</h1>
                        <p className='text-neutral-400 text-sm'>View and update your personal information</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className='px-2 py-1 bg-blue-600 rounded hover:bg-blue-500'>
                            Reset Password
                        </button>
                        <button className='px-2 py-1 bg-gray-800 rounded hover:bg-gray-700'>
                            Edit
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-4 gap-4 ">
                    <div className="md:col-span-1 sm:col-span-2 row-span-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 flex flex-col items-center gap-3">
                        <div>
                            <img src={profilePic} alt="Profile" className="rounded-full w-32 h-32 object-cover" />
                        </div>
                        <h2 className='text-xl '>
                            {loginCredentials.name}
                        </h2>
                        <p className='text-sm text-neutral-400'>
                            Student
                        </p>
                        <p className='text-sm text-neutral-400'>
                            {loginCredentials.university} • {loginCredentials.uid}
                        </p>
                        <div className='flex gap-2 '>
                            <button className='px-2 py-1 bg-gray-800 rounded hover:bg-gray-700'>
                                Edit Profile
                            </button>
                            <button className='px-2 py-1 bg-blue-600 rounded hover:bg-blue-500'>
                                Reset Password
                            </button>
                        </div>
                    </div>
                    {
                        profileDetails.map((detail, i) => (
                            <ProfileDetailsCard key={i} label={detail.label} of={detail.value} isLink={detail.isLink || false} />
                        ))
                    }
                </div>

                <div className='p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-4'>
                    <h2 className="text-lg font-medium text-zinc-100">Contact & Links</h2>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {
                            contactDetails.map((detail, i) => (
                                <ProfileDetailsCard key={i} label={detail.label} of={detail.value} isLink={detail.isLink || false} />
                            ))
                        }
                    </div>
                </div>
                
                <div className='p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-4'>
                    <h2 className="text-lg font-medium text-zinc-100">Academics</h2>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {
                            academicDetails.map((detail, i) => (
                                <ProfileDetailsCard key={i} label={detail.label} of={detail.value} isLink={detail.isLink || false} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
