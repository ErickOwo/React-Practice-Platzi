import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "../styles/global.css";
import Layout from "../containers/Layout";
import Newpassword from "../pages/Newpassword";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/notFound";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import MyAccount from "../pages/MyAccount"
import CheckOut from "../pages/CheckOut";

const App = ()=>{
  const initialState = useInitialState();
  return(
    <AppContext.Provider  value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/create-account" element={<CreateAccount/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/new-password" element={<Newpassword/>}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
            <Route exact path="/my-account" element={<MyAccount/>}/>
            <Route exact path="/checkout" element={<CheckOut/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>   
      </BrowserRouter>  
    </AppContext.Provider>
  );
}

export default App;