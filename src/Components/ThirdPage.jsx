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
            {/* <div className="text-darkpurple-0">
                <h1 className="font-bold m-2">Categories</h1>
                <div className="flex justify-evenly text-center">
                    <div className="border-2 border-gray-400 rounded-xl px-5">
                        <div className="people" onClick={() => navigate('/quiz')}></div>
                        <h2>People</h2>
                    </div>
                    <div className="border-2 border-gray-400 flex items-center rounded-xl px-5">
                        <div>
                            <div className="general"></div>
                            <h2>General</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-evenly text-center mt-4">
                    <div className="border-2 border-gray-400 rounded-xl px-5">
                        <div className="land"></div>
                        <h2>Land</h2>
                    </div>
                    <div className="border-2 border-gray-400 rounded-xl px-5">
                        <div className="culture"></div>
                        <h2>Culture</h2>
                    </div>

                </div>
                <div className="flex justify-evenly items-center text-center mt-4">
                    <div className="border-2 border-gray-400  rounded-xl px-5">
                        <div className="heritage"></div>
                        <h2>Heritage</h2>
                    </div>
                    <div></div>
                </div>
            </div> */}


            <div className="text-darkpurple-0">
                <h1 className="font-bold m-2">Categories</h1>
                <div className="grid grid-cols-2 gap-4 text-center mt-4">
                    <div className="border-2 border-gray-400 rounded-xl px-5">
                        <div className="people" onClick={() => navigate('/quiz')}></div>
                        <h2>People</h2>
                    </div>
                    <div className="border-2 border-gray-400 rounded-xl px-5">
                        <div className="general"></div>
                        <h2>General</h2>
                    </div>
                    <div className="border-2 border-gray-400 rounded-xl px-5">
                        <div className="land"></div>
                        <h2>Land</h2>
                    </div>
                    <div className="border-2 border-gray-400 rounded-xl px-5">
                        <div className="culture"></div>
                        <h2>Culture</h2>
                    </div>
                    <div className="border-2 border-gray-400 rounded-xl px-5">
                        <div className="heritage"></div>
                        <h2>Heritage</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
