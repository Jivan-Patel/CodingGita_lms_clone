import React from 'react'

function FeatureCard({ title, details }) {
    return (
        <div className="rounded-xl border border-gray-800 bg-black ps-6 pe-10 py-5 text-left">
            <h3 className='text-white font-semibold'>{title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{details}</p>
        </div>
    )
}

export default FeatureCard
