import { Link } from "react-router-dom"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteQuizById,  fetchQuizData } from "../feature/quiz/quizSlice"
import Loader from "../components/Loader"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const QuizDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>(state.User.currentUser))
  // console.log(user)
  // console.log(user.uid)

  useEffect(() => {
    // Dispatch the fetchQuizData async thunk when the component mounts
    dispatch(fetchQuizData(user.userUid));
  
  }, [dispatch,user.userUid]);
  //  const navigate = useNavigate()
  //  const result =  fetchAllQuizzData()

  const quizzes = useSelector(state=>state.quiz.quiz)
  const loading = useSelector(state => state.quiz.loading);

    
  
    // const handleList=()=>{
    //    console.log('object') 
    //    navigate("/quizz/:id")
    // }

 const handleDeleteByID =async (id)=>{
    const result = await deleteQuizById(id)
    if(result){
      toast.success(result.message);
    }
 }




    return (
      <div className="h-[50rem] w-full flex flex-col  mt-20 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-4xl">Quizz list that you Created</p>
          <p className="text-gray-400 text-xl">you can view or delete quiz any time</p>
        </div>
  
        {loading ? (
         <Loader/>
        ) : (
          <div className="overflow-x-auto px-5 md:px-0 w-[100%] md:w-[90%] mx-auto">
            <table className="w-full shadow-md  border mx-auto border-gray-100  my-6">
              <thead>
                <tr className="bg-[#333333] text-white text-sm md:text-lg">
                  <th className="py-3 px-6 text-left border-b">Quiz Title</th>
                  <th className="py-3 px-6 text-left border-b">Questions</th>
                  <th className="py-3 px-6 text-left border-b">TimeLimit</th>
                  <th className="py-3 px-6 text-center border-b">Action</th>
                </tr>
              </thead>
              <tbody>
            {/* Render quiz data here */}
            { quizzes.map(quiz => (
              <tr key={quiz._id} className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b text-left">{quiz.title}</td>
                <td className="py-4 px-6 border-b text-left">{quiz.questions?.length}</td>
                <td className="py-4 px-6 border-b text-left">{quiz.timeLimit}</td>
                <td className="py-4 px-6 border-b text-center flex gap-2">
                 <Link to={`quiz-view/${quiz._id}`}> <button className="rounded-lg bg-sky-500 hover:bg-sky-800 px-3 py-1 text-lg text-white duration-300 active:scale-95">View</button></Link>
                  <button className="rounded-lg bg-sky-500 hover:bg-sky-800 px-3 py-1 text-lg text-white duration-300 active:scale-95">Update</button>
                  <button onClick={()=>handleDeleteByID(quiz._id)}
                   className="rounded-lg bg-sky-500 hover:bg-sky-800 px-3 py-1 text-lg text-white duration-300 active:scale-95">Delete</button>
                
                </td>
              </tr>
            ))}
          </tbody>
            </table>
          </div>
        )}
        <ToastContainer />
      </div>
    );
}

export default QuizDashboard