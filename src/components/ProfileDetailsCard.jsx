import React from 'react'
import { loginCredentials } from '../utils/auth.js';

function ProfileDetailsCard({ label, of, isLink = false }) {
    return (
        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
            <span className="text-xs uppercase tracking-wide text-zinc-400">
                {label}
            </span>
            <span className="block text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                {
                    isLink && loginCredentials[of] ? (
                        <a href={loginCredentials[of]} className="text-blue-500 hover:underline">
                            {loginCredentials[of]}
                        </a>
                    ) : loginCredentials[of] ? loginCredentials[of] : "—"
                }
            </span>
        </div>
    )
}

export default ProfileDetailsCard
