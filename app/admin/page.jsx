import Sidebar from '@/components/sidebar/Sidebar';
import React from 'react';

const page = () => {
  return (
    <div className="flex w-full justify-start items-center m-auto max-w-[1440px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 min-h-screen p-8">
      <Sidebar />
    </div>
  );
};

export default page;
