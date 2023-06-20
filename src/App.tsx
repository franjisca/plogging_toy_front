import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './component/Sidebar';
import MainPage from './component/MainPage';
import Footer from './component/Footer';
import Login from './component/LoginPage';
import SignUp from './component/SignUp';
import MeetingList from './meeting/MeetingList';
import UnitMeeting from './meeting/UnitMeeting';
import CreateMeeting from './meeting/CreateMeeting';


function App() {
  return (
    <div>
      <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/meetinglist" element={<MeetingList/>}/>
        <Route path="/unit-meeting-info" element={<UnitMeeting/>}/>
        <Route path="/createmeeting" element={<CreateMeeting/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
