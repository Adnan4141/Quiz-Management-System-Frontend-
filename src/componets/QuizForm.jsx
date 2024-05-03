import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuizData, quizFormStatus } from "../feature/quiz/quizSlice";

const QuizForm = ({quizDataPass}) => {
  const userInfo = useSelector(state=>(state.User.currentUser))
  const dispatch  = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    questionLength: 0,
    timeLimit: 0,
    CreateBy:userInfo.uid
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit= (e) => {
     e.preventDefault();
    //  console.log(formData)
     quizDataPass(formData)
  };

  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center h-[40]">
      <form  action="" onSubmit={handleSubmit} className="w-full">
        <div className="w-2/3 mx-auto flex flex-col gap-5 my-5">
          <div className="w-full ">
            <input
              className="border w-full py-2 text-lg pl-2"
              type="text"
              name="title"
              value={handleInputChange.title}
              onChange={handleInputChange}
              placeholder="Enter quiz name"
              required
            />
          </div>

          <div className=" flex flex-col gap-5">
            <input
              className="border w-full py-2 text-lg pl-2"
              type="number"
              name="questionLength"
              value={handleInputChange.questionLength}
              onChange={handleInputChange}
              placeholder="Enter Number of Question"
            />
            <input
              className="border w-full py-2 text-lg pl-2"
              type="number"
              name="timeLimit"
              value={handleInputChange.timeLimit}
              onChange={handleInputChange}
              placeholder="Enter quiz Duration"
            />
            <div className="flex justify-center items-center">
              <button className="px-6  py-1 font-semibold text-xl border-[2px] border-yellow-500 bg-custom-Yellow-Quiz text-white hover:bg-transparent hover:border-custom-Yellow-Quiz hover:text-custom-Yellow-Quiz active:bg-yellow-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
