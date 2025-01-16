import React, { useState, useEffect } from "react";

const questions = [
    {
        question: "1. Name the businessman who brought the first car into Pahang?",
        options: ["Loke Yew", "Tan Cheng Lock", "Yap Ah Loy", "Lim Goh Tong"],
        answer: "Tan Cheng Lock",
    },
];

export default function FourthPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10); 
    const [progress, setProgress] = useState(0); 
    const [quizEnd, setQuizEnd] = useState(false);

    useEffect(() => {
        if (timeLeft === 0) {
            nextQuestion();
            return;
        }

        const totalDuration = 10;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
            setProgress((prev) => prev + 10);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const checkAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore((prev) => prev + 1);
        }
        nextQuestion();
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setTimeLeft(10); 
            setProgress(100); 
        } else {
            setQuizEnd(true); 
        }
    };

    return (
        <div className="bg-darkpurple-0 h-screen  flex justify-center  px-4 ">
            <div className="bg-darkpurple-900 px-5 rounded-lg shadow-lg w-full max-w-md text-center">
                {quizEnd ? (
                    <div>
                        <h1 className="text-2xl font-bold text-white">Quiz Completed!</h1>
                        <p className="text-lg mt-4 text-gray-300">
                            Your Score: {score}/{questions.length}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-evenly items-center w-full mt-4 p-[10px]">
                            <div><h1 className="text-white font-medium px-5 ">Time </h1></div>
                            <div className="relative flex items-center w-full bg-gray-300 h-4 rounded-full overflow-hidden ">
                                <div
                                    className="absolute top-0 left-0 h-full w-full bg-orange-500 "
                                    style={{ width: ` ${progress}%` }}>  
                                </div>
                            </div>
                            <div className="text-white px-2">{`00:${timeLeft}`}</div>
                        </div>
                        
                        <h2 className="text-lg font-medium text-gray-400 mt-20">
                            Question {currentQuestion + 1} of {questions.length}
                        </h2>
                        <p className="text-xl font-semibold text-white mt-14">
                            {questions[currentQuestion].question}
                        </p>

                        <div className="space-y-3">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button onClick={() => checkAnswer(option)} className="bg-white mt-9 text-darkpurple-0 font-bold px-4 py-2 w-full rounded-lg shadow-sm hover:bg-gray-200 transition">
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
