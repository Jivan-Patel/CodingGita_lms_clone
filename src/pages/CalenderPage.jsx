import React from 'react';
import Nav from '../components/Nav2.jsx';
import CalenderCard from '../components/CalenderCard.jsx';
import CalenderRightPart from '../components/CalenderRightPart.jsx';

function CalenderPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Nav />
      <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-start mt-20">
        <h2 className='text-xl font-medium'>Calendar</h2>
        <div className="grid grid-cols-3 gap-6">
          <CalenderCard />
          <CalenderRightPart />
        </div>
      </div>
    </div>
  );
}

export default CalenderPage;
