"use client";
import QuestionItem from "@/components/QuestionItem";
import CardItem from "@/components/QuestionItem";
import { QuestionsData } from "@/data/QuestionsData";
import { useState } from "react";

const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = "Quiz de Culinária";

  const handleAnswered = (answer: number) => {};

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">
          {title}
        </div>
        <div className="p-5">
          {QuestionsData.map((item) => (
            <QuestionItem
              question={QuestionsData[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          ))}
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {currentQuestion + 1} de {QuestionsData.length} pergunta
          {QuestionsData.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
};

export default page;
