import React from 'react'

function RoleButton({ role }) {
    return (
        <div className="border rounded-xl border-white/20 p-3 text-sm cursor-pointer hover:bg-white/5 duration-100">{role}</div>
    )
}

export default RoleButton
