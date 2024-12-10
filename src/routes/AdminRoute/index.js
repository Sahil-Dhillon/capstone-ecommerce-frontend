import {useContext, useEffect, useState} from "react";
import { Route,Redirect, Navigate, Outlet, useNavigate, useLocation} from "react-router-dom";


import { AppContext } from "../../context/AppContext";
import Loading from "../../components/Loading";

const ProtectedRouteAdmin = (props) => {

    const { authToken, userData, updateUserData } = useContext(AppContext);
  const navigate = useNavigate();
  function presentPage() {
    navigate(-1);
  }
  const [loading, setLoading] = useState(true)

  
    useEffect(()=>{
        updateUserData()
        console.log(authToken)
        if(userData){
            setLoading(false)
        }
    },[])

    useEffect(() => {
        if(userData){
            console.log(userData)
            setLoading(false)
        }
    }, [userData])

  if(loading){
    return <Loading/>
  }else{
      if (userData.roles === "ADMIN") {
          console.log("ADMIN")
          return <Outlet {...props} />;
        }
        else if(userData.roles!=="ADMIN"){
            console.log("not ADMIN")
            presentPage()
        }
    }
};

export default ProtectedRouteAdmin;