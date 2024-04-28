import React from 'react';
import NavBar from '@/components/NavBar_Company';

export default function CompanyHomePage() {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 bg-opacity-90 min-h-screen flex items-center justify-center text-center">
        <div className="text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Company Dashboard</h1>
          <p className="text-lg md:text-xl mb-8">Manage your job postings, track applications, and hire the best talent with ease.</p>
          <p className="text-lg md:text-xl mb-8">Stay organized, stay efficient, and build your dream team.</p>
        </div>
      </div>
    </>
  );
}