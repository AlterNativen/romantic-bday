// romantic_question_site
import { useState } from "react";
import { motion } from "framer-motion";

const questionsYes = [
  "Would you still love me if I snored like a bear?",
  "Do you believe in soulmates?",
  "Would you dance with me even when there's no music?",
  "If we were characters in a book, would you read our story again and again?",
];

const questionsNo = [
  "Are you sure you're not just playing hard to get?",
  "Would you still smile if I called you cute right now?",
  "Would you miss me if I stopped texting for a day?",
  "What if I told you this was all leading to a surprise?",
];

export default function App() {
  const [step, setStep] = useState(0);
  const [path, setPath] = useState(null);

  const handleAnswer = (answer) => {
    if (step === 0) {
      setPath(answer === "yes" ? "yes" : "no");
    }
    setStep(step + 1);
  };

  const currentQuestion = () => {
    if (step === 0) return "Do you love me?";
    if (path === "yes") return questionsYes[step - 1];
    if (path === "no") return questionsNo[step - 1];
  };

  return (
    <div className="min-h-screen bg-yellow-50 bg-[url('/paper-texture.png')] bg-cover flex flex-col items-center justify-center p-4 text-center font-serif">
      {step <= 4 ? (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6"
        >
          <h1 className="text-2xl mb-6 text-gray-800">{currentQuestion()}</h1>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAnswer("yes")}
              className="px-4 py-2 bg-yellow-200 rounded-xl shadow hover:bg-yellow-300"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="px-4 py-2 bg-yellow-100 rounded-xl shadow hover:bg-yellow-200"
            >
              No
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-xl mb-4 text-gray-700">
            No matter your answers… I just wanted you to hear this.
          </h2>
          <video
            src="/your-song.mp4"
            controls
            autoPlay
            className="rounded-xl w-full shadow-md"
          />
        </motion.div>
      )}
    </div>
  );
}
