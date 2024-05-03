import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { signOutSuccess } from "../feature/participant/participantSlice";
import { signOut } from "firebase/auth";
import { auth } from "../fierbase/firebase";




const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignOut = ()=>{
    console.log("object")
    signOut(auth)
    dispatch(signOutSuccess())

  }


  
  // const navigate  = useNavigate()
  const user = useSelector(state=>(state.User.currentUser))
   console.log(user)


  return (
    <div className="flex justify-between items-center py-5 px-5 relative">
      <div>
        <Link to={"/"}>
          <img src="/src/assets/image/logoQuiz.png" alt="" />
        </Link>
      </div>

      <div className="flex justify-between  gap-10 items-center">
        <ul className="flex gap-5">
          <Link to={"/dashboard"}>
            <li className="hover:text-yellow-500 font-serif">Dashboard</li>
          </Link>
          <Link to={"create-quiz"}>
            <li className="hover:text-yellow-500 font-serif">Create Quiz</li>
          </Link>
          <Link>
            <li className="hover:text-yellow-500 font-serif">About Us</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-10 items-center">
          {
            user && <div className="h-full w-full flex-col flex justify-center hover:text-custom-accent  items-center -my-2">
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              // src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
              alt=""
            />
            <p className="text-sm font-serif ">{user?.name}</p>
          </div>
          }
        <div className="w-full">
        { user? 
        <button onClick={handleSignOut} className="block w-24 text-sm px-2 w-30   py-1 border-[2px] border-custom-Yellow-Quiz hover:bg-yellow-500 hover:text-white text-custom-Yellow-Quiz">
                Log Out
              </button>:
            <Link to={'/signin'}>
              <button className="px-6 py-1 border-[2px] border-custom-Yellow-Quiz hover:bg-yellow-500 hover:text-white text-custom-Yellow-Quiz">
                Login
              </button>
            </Link>
          }
   
        </div>
        </div>
      <span className="absolute bottom-0 w-full border left-0 right-0"></span>
    </div>
  );
};

export default Navbar;
