import { AiOutlineMail } from "react-icons/ai";

import { MdAccountBox } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

// ResultPage.js
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../componets/Loader";
import CircularProgress from "../componets/CircularProgress";
import { VscPass } from "react-icons/vsc";
import { ProgressBar } from "./../componets/ProgressBar";
import { useParams } from "react-router-dom";
import { fetchQuizById } from "../feature/quiz/quizFetch";

const ResultPage = ({ quizId }) => {
  
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [Preview, setPreview] = useState(false);
  const [participantHistory, setParticipantHistory] = useState([]);
  const [participant, setParticipant] = useState([]);
  const userUid = useParams().id
  const quizzesId = useParams().quizId  
 console.log(quizzesId)
 console.log(useParams())
console.log(userUid)


  useEffect(() => {
    const fetchParticipantHistory = async () => {
      try {
        const url = `http://localhost:3000/participants/${userUid}/quizId/${quizzesId}`
        const response = await axios.get(url);
        setLoading(false);
        console.log(response.data)
        const {participant, history } =response.data
        setParticipant(participant)
        setParticipantHistory(history[history.length-1])
        const result = await fetchQuizById(quizzesId) ;
        setQuestions(result.questions)
        console.log(result)
      } catch (error) {
        console.error("Error fetching participant history:", error);
        console.log(error.message)
        setLoading(false);
      }
    };
     

   fetchParticipantHistory();

  }, [quizId]);
 
 
  
  console.log(questions)
  console.log(participantHistory)
  const {correctAnswer,userResponses} = participantHistory;
  console.log(correctAnswer)
  console.log(userResponses)

  if (loading) {
    return <Loader />;
  }

  return (
    // <div>
    //   <div className="sm:max-w-7xl md:mx-auto bg-gray-10 py-10 mt-10 rounded-xl ">
    //     {/* user Info */}
    //     <div className="px-5 mt-10 ">
    //       <p className="font-serif">User Result</p>
    //       <div className="flex gap-3 text-xl items-center font-serif">
    //         <p className="text-2xl">
    //           <MdAccountBox />
    //         </p>
    //         <p className="font-semibold">{participant.name}</p>
    //       </div>
    //       <div className="flex gap-3 text-lg items-center font-serif">
    //         <p className="text-xl pl-1 ">
    //           <AiOutlineMail />
    //         </p>
    //         <p className="font-serif">{participant.email}</p>
    //       </div>
    //     </div>

    //     <div className="grid md:grid-cols-2 grid-cols-1   p-5 gap-10 ">
    //       <div className="grid grid-cols-2  rounded-xl shadow-lg">
    //         <div className="p-5">
    //           <div className="flex mt-2 gap-2 items-center font-bold  text-green-500">
    //             <p className="text-2xl font-bold  ">
    //               <VscPass />
    //             </p>
    //             <p className="text-xl font-serif">Test Passed</p>
    //           </div>
    //           <div className="text-xl font-mono ">
    //             <p>Grade</p>
    //             <p>B</p>
    //           </div>
    //         </div>
    //         <div className="p-3">
    //           <CircularProgress percentage={participantHistory.quizScore} />
    //         </div>
    //       </div>

    //       <div className="rounded-xl text-black   p-2 shadow-lg">
    //         <div className=" mt-2   ">
    //           <div className="flex items-center gap-3 font-bold ">
    //             <p>
    //               <BiTimeFive />
    //             </p>
    //             <p>Total Time</p>
    //           </div>

    //           <div className="px-6 space-y-5 mt-2 font-semibold ">
    //             <div>
    //               <p>00.12.04 / 00.30.00</p>
    //             </div>

    //             {/* progressBar start */}
    //             <div className="flex flex-col w-[350px] mx-auto gap-2">
    //               <div
    //                 className={`flex h-2 w-full  items-center justify-center rounded-full bg-gray-300`}
    //               >
    //                 <div
    //                   style={{ width: `${40}%` }}
    //                   className={`transition-width mr-auto h-2 w-0 rounded-full  bg-gray-800 duration-500`}
    //                 ></div>
    //               </div>
    //             </div>
    //             {/* progressBar end */}

    //             <div className="flex  justify-between">
    //               <p>Start Time : 17:43</p>
    //               <p>Date : 2021-08-06</p>
    //             </div>

    //             <p>End Time : 17:55</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* preview */}
    //   <div className="text-center">
    //   <button className="relative h-14 w-32 origin-top transform rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">Preview</button>
    //   </div>

    // </div>

    <div className="my-10 px-5">
{
  questions && 
  questions.map((question,index)=>(
    <div className="my-5" key={question._id}>
  <h2 className="text-2xl font-semibold">
    Question {index+1}
  </h2>
 
 {  questions[index].media &&
  <div className="w-full h-40 my-2 flex justify-center">
    <img
      src={questions[index].media}
      alt={questions[index].text}
    />
  </div>
 }

  <p className="text-xl font-mono my-1 text-gray-900">
   {question.text} {/* Replace dynamic content with static */}
  </p>
  <div className="grid grid-cols-2 gap-2">
   
  {questions[index].options.map((option, indx) => (
  <div
    className={`${correctAnswer[index] === option ? "correct" : (userResponses[index] === option ? "wrong" : "defaults")}`}
    key={indx}
  >
    <label htmlFor={`option-${index}`}>{index+1}.{option} </label>
  </div>
))}
  </div>
   <p className="text-xl font-serif my-1">Explanation</p>
  </div>
  ))
}
  
</div>
  );
};

export default ResultPage;
