import React from 'react';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function CalenderGrid() {
  const days = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div className="p-4">
      <div className="mb-2 grid grid-cols-7 gap-2 text-xs text-neutral-400">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <button
            key={day}
            className={`h-20 rounded-md border p-2 text-left transition ${
              day === 27
                ? 'border-neutral-800 bg-neutral-900 ring-2 ring-blue-500 hover:bg-neutral-800'
                : day > 31
                ? 'cursor-default border-transparent bg-transparent'
                : 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800'
            }`}
            disabled={day > 31}
          >
            <div
              className='text-sm text-neutral-200'
            >
              {day <= 31 ? day : ''}
            </div>
            <div className="mt-1 flex gap-1"></div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalenderGrid;
