import React from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
    const navigate = useNavigate();

    return (
        <div className="bg-darkpurple-0 h-screen font-rubik text-white relative">
            <h1 className="text-5xl sm:text-5xl pt-12 font-bold text-center">
                Quizard
            </h1>
            <div className="flex justify-center items-center flex-wrap pt-6 px-20 text-center">
                <p>1,000+ quizzes to challenge you and your friends on all topics!</p>
            </div>
            <div className="relative flex justify-center items-center ">
                <div>
                    <div className="blob1"></div>
                    <div className="blob2"></div>
                </div>
                <img className="treasureBox w-auto" src="img2.png" alt="Treasure box" />

            </div>
            <div className="flex w-screen justify-center items-center mt-36 p-10">
                <button
                    className="bg-cyan-400 text-indigo-950 font-medium px-7 py-2 rounded-lg"
                    onClick={() => navigate("/secondpage")} 
                >
                    Start playing
                </button>
            </div>
        </div>
    );
}
