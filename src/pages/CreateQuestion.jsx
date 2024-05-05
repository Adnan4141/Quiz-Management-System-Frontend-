import {  useState } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CreateQuestion = ({ dataPass, index,quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState([""]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()
  const quizLength = Number(quizData.questionLength);


  const handleAddOption = (e) => {
    e.preventDefault();
    setOptions([...options, newOption]);
    setNewOption("");
  };

  const handleOptionChange = (e) => {
    setNewOption(e.target.value);
  };

  const userInfo = useSelector((state) => state.User.currentUser);

  const [questionFormData, setQuestionFormData] = useState({
    text: "",
    answer: "",
    explanation: "",
    media: "",
    hint: "",
    points: "",
    options: [],
    userUid: userInfo.uid,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionFormData({ ...questionFormData, [name]: value });
  };

  const hanldleSubmit = async (e) => {
    e.preventDefault();
    setCurrentQuestionIndex((prev)=>prev+1)
    const obj = {
      ...questionFormData,
      options: options.filter((option) => option.trim() !== ""), 
    };
    console.log(currentQuestionIndex)
    dataPass(obj, currentQuestionIndex);
    setSubmitted(false);
    console.log("Form submitted successfully");
    setNewOption("");
    setOptions([]);
    setQuestionFormData({
      text: "",
      answer: 0,
      explanation: "",
      media: "",
      hint: "",
      points: 0,
      options: [],
    });
    if(index == quizLength-1){
    //  navigate("/")
  
     
    }
  };

  return (
    <div className="h-[50rem] w-full flex flex-col  items-center mt-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-4xl font-serif">Create the Question {currentQuestionIndex+1}</p>
        <p className="text-gray-400 text-xl"></p>
      </div>
      <form action="" onSubmit={hanldleSubmit} className="w-full">
        <div className="my-3 w-full flex flex-col items-center justify-center">
          <div className="w-[60%]  space-y-4">
            
          <div className="mb-3">
          <label
            htmlFor="title"
            className="text-base text-navy-700 dark:text-white font-bold"
          >
           Quiz Title
          </label>
          <input
            type="text"
                name="text"
                value={questionFormData.text}
                onChange={handleInputChange}
                placeholder="Enter question"
              required
            className="mt-2 flex h-12 font-mono  w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-lg placeholder:text-sm outline-none border-gray-200"
          />
        </div>

            <div className="w-full">
              <input
                className="border w-full py-2 text-lg pl-2"
                type="text"
                name="text"
                value={questionFormData.text}
                onChange={handleInputChange}
                placeholder="Enter question"
                required
              />
            </div>

            <div className=" flex flex-col gap-2">
              <input
                className="border w-full py-2 text-lg pl-2"
                type="text"
                name="options"
                value={newOption}
                onChange={handleOptionChange}
                placeholder="Options"
              />
              <div>
                <button
                  className=" px-6 py-1 border-[2px] border-custom-Yellow-Quiz text-custom-Yellow-Quiz hover:bg-custom-Yellow-Quiz hover:text-white active:bg-yellow-200"
                  onClick={(e) => handleAddOption(e)}
                >
                  Add Option
                </button>
              </div>
            </div>

            {options.length > 0 ? (
              <div className="grid grid-cols-2 gap-5 w-full">
                {options.map((option, index) => (
                  <p
                    key={index}
                    className="text-md border py-2 px-1 font-semibold pl-2"
                  >
                   {index+1}. {option}
                  </p>
                ))}
              </div>
            ) : (
              " "
            )}

            <div className="w-full">
              <input
                className="border w-full py-2 text-lg pl-2"
                type="number"
                name="answer"
                value={questionFormData.answer}
                onChange={handleInputChange}
                placeholder="Enter Answer number this question"
              />
            </div>

            <div className="w-full">
              <input
                className="border w-full py-2 text-lg pl-2"
                type="text"
                name="explanation"
                value={questionFormData.explanation}
                onChange={handleInputChange}
                placeholder="Explanation this answer if necessary"
              />
            </div>

            <div className="w-full">
              <input
                className="border w-full py-2 text-lg pl-2"
                type="number"
                name="points"
                value={questionFormData.points}
                onChange={handleInputChange}
                placeholder="Give point for this question"
              />
            </div>

            <div className="w-full">
              <input
                className="border w-full py-2 text-lg pl-2"
                type="text"
                name="hint"
                value={questionFormData.hint}
                onChange={handleInputChange}
                placeholder="Hint for this question"
              />
            </div>

            <div className="w-full">
              <p className="font-mono mx-2">
                Upload the question picture if necessary (Optional)
              </p>
              <input
                className="border w-full py-2 text-sm pl-2"
                type="file"
                value={questionFormData.media}
                onChange={handleInputChange}
                name="media"
              />
            </div>
          </div>
        </div>
        {/* { !submitted && */}

        {currentQuestionIndex < quizLength && (
          <div className="w-full flex justify-center py-10 px-10">
            <button
           
              className="px-6 py-1 font-semibold text-xl border-[2px] border-yellow-500 bg-custom-Yellow-Quiz text-white hover:bg-transparent hover:border-custom-Yellow-Quiz hover:text-custom-Yellow-Quiz active:bg-yellow-200"
            >
             {index < quizLength -1? "Next":"Submit"}
            </button>
          </div>
        )}
      </form>

      {/* {currentQuestionIndex === quizLength && (
        <div className="w-full flex justify-center py-10 px-10">
          <button className="px-6  py-1 font-semibold text-xl border-[2px] border-yellow-500 bg-custom-Yellow-Quiz text-white hover:bg-transparent hover:border-custom-Yellow-Quiz hover:text-custom-Yellow-Quiz active:bg-yellow-200">
            Next
          </button>
        </div>
      )} */}
    </div>
  );
};

export default CreateQuestion;
