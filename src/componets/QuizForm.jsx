import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuizData, quizFormStatus } from "../feature/quiz/quizSlice";

const QuizForm = ({ quizDataPass }) => {
  const userInfo = useSelector((state) => state.User.currentUser);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    questionLength: 0,
    timeLimit: 0,
    CreateBy: userInfo.uid,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(formData)
    quizDataPass(formData);
  };

  return (
   <div className="w-full md:max-w-7xl  mx-auto flex justify-center items-center -mt-20">
     <div className="flex flex-col justify-center items-center h-screen">
     <form onSubmit={handleSubmit}
      className="z-5 relative  rounded-20 max-w-300 md:max-w-500  bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full p-6 3xl:p-[18px] bg-white" 
     action="">
    
        <div className="relative flex flex-row justify-center">
          <h4 className="text-3xl text-center font-bold text-navy-700 dark:text-white mb-5">
           Create the Quiz
          </h4>
        </div>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="text-base text-navy-700 dark:text-white font-bold"
          >
           Quiz Title
          </label>
          <input
              type="text"
              name="title"
              value={handleInputChange.title}
              onChange={handleInputChange}
              placeholder="Enter quiz title"
              required
            className="mt-2 flex h-14 font-mono  w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-lg placeholder:text-sm outline-none border-gray-200"
          />
        </div>


        <div className="mb-3">
          <label
            htmlFor="questionLength"
            className="text-base text-navy-700 dark:text-white font-bold"
          >
            Number of Question
          </label>
          <input
             type="number"
              id="questionLength"
              name="questionLength"
              value={handleInputChange.questionLength}
              onChange={handleInputChange}
              min={1}
              required
              placeholder="Enter Number of Question"
            className="mt-2 flex h-14 w-full font-serif placeholder:font-sans  placeholder:text-sm items-center justify-center rounded-xl border bg-white/0 p-3 text-lg outline-none border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
          />
        </div>
        
        <div className="mb-3">
          <label
            htmlFor="timeLimit"
            className="text-base text-navy-700 dark:text-white font-bold"
          >
            Time Duration
          </label>
          <input
            type="number"
              name="timeLimit"
              id="timeLimit"
              value={handleInputChange.timeLimit}
              min={1}
                required
              onChange={handleInputChange}
              placeholder="Enter quiz Duration"
            className="mt-2 flex h-14 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-lg placeholder:text-sm outline-none border-purple-600 text-purple-600 placeholder:text-purple-600 dark:!border-purple-400 dark:!text-purple-400 dark:placeholder:!text-purple-400"
          />
        </div>
        <button className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Create Quiz</button>

        {/* <div>
          <label
            htmlFor="email4"
            className="text-sm text-navy-700 dark:text-white font-bold"
          >
            Disabled
          </label>
          <input
            disabled
            type="text"
            id="email4"
            placeholder="@horizon.ui"
            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-none bg-gray-100 cursor-not-allowed dark:bg-white/5"
          />
        </div> */}
     
     </form>
      
      <p className="font-normal text-navy-700 mt-20 mx-auto w-max">
        Notifications Card component from{" "}
        <a
          href="https://horizon-ui.com?ref=tailwindcomponents.com"
          target="_blank"
          className="text-brand-500 font-bold"
        >
          Horizon UI 
        </a>
      </p>
    </div>
   </div>

   
  );
};

export default QuizForm;
