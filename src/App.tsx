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
import MyPage from './mypage/MyPage';
import Chatting from './mypage/mypage_component/Chatting';
import PhotoList from './with_plogging/PhotoList';


function App() {
  return (
    <div>
      <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/loginPage" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/meetinglist" element={<MeetingList/>}/>
        <Route path="/unit-meeting-info" element={<UnitMeeting/>}/>
        <Route path="/createmeeting" element={<CreateMeeting/>}/>
        <Route path="/photolist" element={<PhotoList/>}/>
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="chatting" element= {<Chatting/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
