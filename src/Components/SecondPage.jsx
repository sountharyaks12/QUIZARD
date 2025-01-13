import React from 'react';
import { FaTwitter}  from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function SecondPage() {
    const navigate = useNavigate();

    return (
        <div className="bg-darkpurple-0 text-white px-3">
            <h1 className="text-4xl font-bold text-center pt-16">
                Sign up now
            </h1>
            <p className="m-5 text-center">Join Quizard and invite friends</p>

            <form className="bg-white text-black font-medium rounded-3xl py-5 w-full">
                <div className="m-5" >
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className="w-full p-2 rounded-lg border-2 border-gray-400" required placeholder="winner@gmail.com" />
                </div>

                <div className="m-5">
                    <label htmlFor="name">Your username</label><br />
                    <input type="text" className="w-full p-2 rounded-lg border-2 border-gray-400" required placeholder="Rookie123" />
                </div>

                <div className="m-5">
                    <label htmlFor="password">Your password</label><br />
                    <input type="password" className="w-full p-2 rounded-lg border-2 border-gray-400" required placeholder="************" />
                </div>
                <div className=" w-full text-center text-gray-600">
                    <p>______________or sign up with ______________</p>
                </div>

                <div className="flex justify-around m-5">
                    <button className="text-red-700 h-16 border-2 w-32 border-gray-500 rounded-full font-bold text-4xl">G</button>
                    <button className="text-blue-600 h-16 border-2 w-32 border-gray-500 rounded-full font-bold text-4xl">f</button>
                    <button className="text-blue-500 text-center px-9 py-3 border-2  border-gray-500 rounded-full font-bold text-4xl">
                    <FaTwitter />
                    </button>
                </div>
                <button
                    className="w-11/12 m-5 bg-darkpurple-0 text-white h-16 rounded-xl"
                    onClick={(e) => {
                        e.preventDefault(); 
                        navigate('/thirdpage'); 
                    }}
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}
