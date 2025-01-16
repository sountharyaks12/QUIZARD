import React from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
    const navigate = useNavigate();

    return (
        <div className="bg-darkpurple-0 h-screen font-rubik text-white relative">
           <div className="flex justify-center items-center">
            <img src='logo.png' alt="" height={200} width={300} />
           </div>
            <div className="flex justify-center items-center flex-wrap pt-4 px-20 text-center">
                <p>1,000+ quizzes to challenge you and your friends on all topics!</p>
            </div>
            <div className="relative flex justify-center items-center  ">
                <div>
                    <div className="blob1"></div>
                    <div className="blob2"></div>
                </div>
                <img className="treasureBox w-auto" src="img2.png" alt="Treasure box" />

            </div>
            <div className="flex justify-center items-center mt-20">
                <button
                    className="bg-cyan-400 text-darkpurple-0 font-bold w-9/12 p-4 rounded-lg  "
                    onClick={() => navigate("/signup")}>
                    Start playing
                </button>
            </div>
        </div>
    );
}
