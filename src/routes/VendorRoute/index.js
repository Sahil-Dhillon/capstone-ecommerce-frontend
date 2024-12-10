import {useContext, useEffect, useState} from "react";
import { Route,Redirect, Navigate, Outlet, useNavigate, useLocation} from "react-router-dom";


import { AppContext } from "../../context/AppContext";
import Loading from "../../components/Loading";

const ProtectedRouteVendor = (props) => {

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
      if (userData.roles === "VENDOR") {
          console.log("VENDOR")
          return <Outlet {...props} />;
        }
        else if(userData.roles!=="VENDOR"){
            console.log("not VENDOR")
            presentPage()
        }
    }
};

export default ProtectedRouteVendor;