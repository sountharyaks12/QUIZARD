import React from "react";
import { useNavigate } from "react-router-dom";
export default function ThirdPage() {
    const navigate = useNavigate();
    return (
        <div className="third-page m-4 min-h-fit">
            <div>
                <h3 className="text-darkpurple-0 font-semibold text-xl">Welcome back, Elvie</h3>
                <h1 className="text-darkpurple-0 font-bold text-4xl">Let's play!</h1>
            </div>
            <div className="bg-darkpurple-0 text-white p-4 mt-5">
                <div className="flex justify-between">
                    <h2 className="text-lg font-medium">3 days strike!</h2>
                    <div className="coin"></div>
                </div>
                <div className="mt-4">
                    <h5 className="text-sm text-gray-300">+10 daily points</h5>
                    <div className="w-full bg-gray-200 h-4 rounded-full mt-3">
                        <div className="bg-blue-500 h-full rounded-full w-32"></div>
                    </div>
                </div>
            </div>
            <div className="text-darkpurple-0">
                <h2 className="font-bold m-2">Quiz of the week</h2>
                <div className="flex justify-between border-2 m-2 border-gray-400 p-5 rounded-3xl">
                    <div>
                        <h1 className="text-2xl font-medium">Design tools</h1>
                        <h6 className="text-4sm mt-2 text-darkpurple-0 font-medium">1,997 players worldwide</h6>
                        <button
                            className="bg-blue-600 mt-4 text-white w-11/12 rounded-lg p-2"
                            onClick={() => navigate('/fourthpage')} 
                        >
                            Let's Start
                        </button>
                    </div>
                    <div className="magicPortion"></div>
                </div>
            </div>
            <div className="text-darkpurple-0">
                <h1 className="font-bold m-2">Categories</h1>
                <div className="flex justify-evenly text-center">
                    <div className="border-2 border-gray-400 rounded-3xl px-5">
                        <div className="music"></div>
                        <h2>Music</h2>
                    </div>
                    <div className="border-2 border-gray-400 rounded-3xl px-5">
                        <div className="sports"></div>
                        <h2>Sports</h2>
                    </div>
                </div>
                <div className="flex justify-evenly text-center mt-4">
                    <div className="border-2 border-gray-400 rounded-3xl px-5">
                        <div className="design"></div>
                        <h2>Design</h2>
                    </div>
                    <div className="border-2 border-gray-400 rounded-3xl px-5">
                        <div className="chick"></div>
                        <h2>Animals</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
