import React from 'react';

const ProfileView = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <img 
        src="path/to/profile-image.jpg" 
        alt="Profile" 
        className="rounded-full w-24 h-24 md:w-36 md:h-36"
      />
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold">Maja Oyindamola</h2>
        <p className="text-gray-600">Badagry Lagos, Nigeria</p>
        <p className="text-gray-600">NIN: 1224 3458 **** ****</p>
      </div>
      <div className="w-full mt-6 md:w-3/4">
        <div className="flex justify-between items-center p-3 bg-white rounded-md mb-3 shadow-sm">
          <span>Vaccine Schedule Record</span>
          <span>&gt;</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white rounded-md mb-3 shadow-sm">
          <span>Change Password</span>
          <span>&gt;</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white rounded-md mb-3 shadow-sm">
          <span>Set Default Address</span>
          <span>&gt;</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white rounded-md mb-3 shadow-sm">
          <span>Dark Mode</span>
          <input type="checkbox" />
        </div>
        <div className="flex justify-between items-center p-3 bg-white rounded-md mb-3 shadow-sm">
          <span>Notification Settings</span>
          <span>&gt;</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white rounded-md mb-3 shadow-sm">
          <span>Support</span>
          <span>&gt;</span>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        Log out
      </button>
    </div>
  );
};

export default ProfileView;
