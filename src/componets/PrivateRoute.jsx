
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = ({ children }) => {


    const user = useSelector(state=>(state.User.currentUser))

//   const { isLoggedIn } = useContext(AuthContext); 

  if (!user) {
    return <Navigate to="/signin" replace />; 
  }

  return children || <Outlet />; 
};

export default PrivateRoute;