"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/app/components/Navbar';
import { AiOutlineLoading } from 'react-icons/ai';

interface User {
  _id: string;
  username: string;
  experience: number;
}

const Leaderboard = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get<{ users: User[] }>('http://localhost:5000/api/v1/user/leaderboard');
        setUsers(response.data.users);  // Access the "users" array from the response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  const sortedUsers = [...users].sort((a, b) => b.experience - a.experience);

  const rank = (index) => {
    switch (index) {
      case 0:
        return 'ranking-first-style';
      case 1:
        return 'ranking-second-style';
      case 2:
        return 'ranking-third-style';
      default:
        return '';
    }
  };

  return (
    <>
      <Navbar />
      <section id="leaderboard" className="w-full min-h-screen pl-72 pr-7">
        <h1 className="pt-4 font-bold text-xl mb-8 text-red-500">Leaderboard</h1>

        <div className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-red-600 to-red-800">
          <div className="relative p-8 z-10">
            <h2 className="banner-heading mb-3">Rise to the top!</h2>
            <p className="text-lg">Be the best and compete with others.</p>
          </div>
          <div className="banner-bg-style bg-connections" />
        </div>

        <div className="box-container-style">
          <h2 className="text-xl font-bold mb-4">Rankings</h2>
          <div className="flex flex-col">
            {loading && <AiOutlineLoading className="animate-spin h-12 w-12 mx-auto" />}

            {sortedUsers.map((user, index) => (
              <div
                key={user._id}
                className="w-auto flex items-center p-2 px-4 gap-4 rounded-xl odd:bg-slate-900/5 dark:odd:bg-slate-900/50"
              >
                <span className={`ranking-index-style ${rank(index)}`}>{index + 1}</span>
                <div className="w-12 h-12 shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center uppercase font-bold text-2xl text-black bg-gradient-to-r from-red-600 to-red-800">
                    {user.username?.charAt(0).toUpperCase()}
                  </div>
                </div>

                <div className="flex flex-col flex-grow overflow-hidden">
                  <h3 className="font-bold truncate">{user.username}</h3>
                  <p className="text-black dark:text-black truncate">{user.experience} XP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leaderboard;
