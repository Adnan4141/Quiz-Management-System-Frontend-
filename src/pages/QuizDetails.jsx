import { FaRegClipboard } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { deleteParticipant, fetchQuizById } from "../feature/quiz/quizFetch";
import { useEffect, useState } from "react";
import Loader from "../componets/Loader";

const QuizDetails = () => {
  const [quiz, setQuiz] = useState(null);
  const { id } = useParams();
  const participants = quiz ? quiz.participantHistory : [];
  console.log(participants);



  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard"))
      .catch((error) => console.error("Failed to copy:", error));
  };

  useEffect(() => {
    const fetchSpecificData = async () => {
      try {
        const result = await fetchQuizById(id);
        console.log(result)
        setQuiz(result);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchSpecificData();
  }, [id]);

  if (!quiz) {
    return <Loader />;
  }

  console.log(quiz);


const handleParticipantDelete =(participantId)=>{
  
   deleteParticipant(id,participantId)
}





  return (
    <>
      <div className="my-14 px-10 ">
        <p className="my-5 text-3xl text-center font-mono text-orange-400">
          Quiz Details
        </p>
        {quiz && (
          <div className="border-[2px] px-5 border-orange-400 p-3  rounded-xl">
            <h2 className="text-2xl font-semibold py-2 border-b">
              Quiz Title: {quiz.title}
            </h2>
            <p className="text-xl font-semibold py-2  border-b">
              Total Questions :
            </p>
            <p className="text-center text-xl font-bold text-teal-700">
              Question Text
            </p>
            <ul className="py-2 border-b">
              {quiz.questions.map((question, index) => (
                <li className="font-semibold text-xl  " key={index}>
                  {index + 1}. {question.text}
                </li>
              ))}
            </ul>
            <p className=" text-xl font-semibold">
              Time Limit: {quiz.timeLimit} seconds
            </p>
          </div>
        )}
        <p className="text-lg font-semibold -mb-2 mt-4 text-orange-400">
          Copy Clipboard{" "}
        </p>
        <div className="text-red-700 rounded-lg">
          <h2
            onClick={() => copyToClipboard(quiz._id)}
            className="text-xl cursor-pointer  relative border-[2px] my-2 p-2 border-blue-700"
          >
            Quiz Id: {quiz._id}
            <span className="absolute right-2 top-2 cursor-pointer text-3xl">
              <FaRegClipboard />
            </span>
          </h2>
        </div>
      </div>
    


      {   !participants.length<1 &&
        <div className="overflow-x-auto">
        <p className="text-4xl text-center text-[#0095FF] font-bold">Quiz Participer</p>
        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-[#0095FF] text-white">
              <th className="py-4 px-6 text-lg text-left border-b">ID</th>
              <th className="py-4 px-6 text-lg text-left border-b">Name</th>
              <th className="py-4 px-6 text-lg text-left border-b">Email</th>
              <th className="py-4 px-6 text-lg text-left border-b">Score</th>
              <th className="py-4 px-6 text-lg border-b  text-left">
                Timespend
              </th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {  participants.map((user) => (
              <tr
          
                key={user.userUid}
                className="hover:bg-gray-50 border-b transition duration-300"
              >
                {/* <td className="py-4 px-4 flex justify-start">
                  <img
                  
                    src="https://source.unsplash.com/64x64/?microphone"
                    alt="table navigate ui"
                    className="h-16 w-16 object-cover bg-gray-300"
                  />
                </td> */}
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {user.metricId}
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {user.name}
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {user.email}
                </td>
                <td className="py-4 px-6 border-b text-lg md:text-left text-center  font-medium">
                  {user.quizScore}
                </td>
                <td className="py-4 px-6 border-b text-lg  text-center md:text-left font-medium">
                 {user.completionTimestamp}
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <button onClick={()=>handleParticipantDelete(user.userUid)} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
    </>
  );
};

export default QuizDetails;
