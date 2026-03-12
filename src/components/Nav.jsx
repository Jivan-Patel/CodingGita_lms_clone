import React, { useState } from 'react'
import { getInitials } from '../utils/getinitials.js'
import { ChevronDown } from 'lucide-react'



function Nav() {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")) || null;

  const initials = getInitials(user?.name)
  return (
    <header className='fixed top-0 left-0 inset-x-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur supports-backdrop-filter:bg-neutral-900/60'>
      {/* Top Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left */}
        <div className='flex items-center gap-3'>
          {/* logo */}
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
            {initials}
          </div>
          <span className='text-white font-semibold'>Student</span>

          {/* Desktop menu */}
          <nav className='hidden md:flex items-center gap-1 ml-2'>
            <div className={`px-3 py-3 rounded-md text-sm font-medium bg-neutral-800 text-white`}>
              Dashboard
            </div>
            <div className={`px-3 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 text-white`}>
              Attendance
            </div>
            <div className={`px-3 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 text-white`}>
              Calender
            </div>
            <div className={`px-3 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 text-white`}>
              Chat
            </div>
            <div class="relative group">
              <button class="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 flex items-center gap-1">
                More <ChevronDown size={16} />
              </button>
              <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 mt-2 w-48 rounded-lg border border-neutral-800 bg-neutral-900 shadow-xl">
                <div class="p-2">
                  <div class="w-full block text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800 cursor-pointer">
                    Semester Attendance
                  </div>
                  <div class="w-full block text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800 cursor-pointer">
                    Feedback
                  </div>
                  <div class="w-full block text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800 cursor-pointer">
                    Weekly Subject Feedback
                  </div>
                  <div class="w-full block text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800 cursor-pointer">
                    Apply Leave
                  </div>
                </div>
              </div>
            </div>

          </nav>

        </div>
      </div>
    </header>
  )
}

export default Nav
