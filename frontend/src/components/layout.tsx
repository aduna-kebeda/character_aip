import React from 'react';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-[100%] bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full  bg-white shadow-lg z-10">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 w-[90%] flex flex-col  justify-center items-center">
        {/* Page content */}
        <main className="flex-1 w-[90%] overflow-auto">
          <div className="p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;