import UserList from '@/components/userlist/Userlist';
import React from 'react';

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
};

const page = async () => {
    const data = await fetchUsers();

    return (
        <div className="flex w-full justify-center items-center min-h-screen bg-gradient-to-r to-indigo-500">
            <div className="p-10 flex flex-wrap justify-center bg-white bg-opacity-90 shadow-2xl rounded-3xl max-w-7xl">
                <UserList 
                    data={data} 
                    cardClass="flex flex-col justify-between items-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 shadow-lg rounded-xl p-6 m-4 w-[300px] h-[350px] transition-transform hover:scale-105 duration-300"
                    cardStyle={{ minWidth: '300px', minHeight: '350px', maxWidth: '300px', maxHeight: '350px' }} 
                />
            </div>
        </div>
    );
};

export default page;
