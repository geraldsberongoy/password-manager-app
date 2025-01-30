import { useState } from 'react';
import SearchBar from "./SearchBar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Password = () => {
  const [visiblePasswordIds, setVisiblePasswordIds] = useState([]);

  const passwords = [
    { id: 1, title: 'Email', username: 'user@example.com', password: 'password123' },
    { id: 2, title: 'Bank', username: 'user@bank.com', password: 'securepassword' },
    { id: 3, title: 'Social Media', username: 'user@social.com', password: 'mypassword' },
    { id: 4, title: 'Work', username: 'user@user.com', password: 'workpassword' },
    { id: 5, title: 'Shopping', username: 'user@shop.com', password: 'shoppingpassword' },
    { id: 6, title: 'Gaming', username: 'user@gaming.com', password: 'gamingpassword' },
    { id: 7, title: 'Streaming', username: 'user@stream.com', password: 'streampassword' },
    { id: 8, title: 'Travel', username: 'user@travel.com', password: 'travelpassword' },
    { id: 9, title: 'Utilities', username: 'user@utilities.com', password: 'utilitiespassword' },
    { id: 10, title: 'Education', username: 'user@edu.com', password: 'educationpassword' },
  ];

  const toggleShowPassword = (id) => {
    setVisiblePasswordIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((visibleId) => visibleId !== id) : [...prevIds, id]
    );
  };

  return (
    <div className="bg-gray-500 p-5 m-5 rounded-lg">
      {/* Header Part */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-white">Passwords ({passwords.length})</h1>
        {/* Search Bar */}
        <SearchBar />
        <button className="bg-blue-500 text-white px-3 py-1 ml-3 rounded-lg">
          New Password
        </button>
      </div>
      {/* Grid Part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
        {passwords.map((password) => (
          <div key={password.id} className="bg-white flex p-4 rounded-lg shadow-md gap-2">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-green-200 flex items-center justify-center rounded-sm">
                image
              </div>
            </div>
              <div className="flex flex-col w-full">
                <h2 className="text-xl font-bold">{password.title}</h2>
                <p class>Username: {password.username}</p>

                <div className="flex items-center justify-between">
                  <p>Password: {visiblePasswordIds.includes(password.id) ? password.password : '••••••••'}</p>
                  <button onClick={() => toggleShowPassword(password.id)} className="text-blue-500 flex items-center justify-center">
                    {visiblePasswordIds.includes(password.id) ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                  </button>
                </div>
                
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Password;