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
import PhotoList from './photolist/PhotoList';
import NotFound from './component/NotFound';
import Preparing from './component/Preparing';


function App() {
  return (
    <div>
      <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route key={Math.random()} path="/" element={<MainPage/>}/>
        <Route key={Math.random()} path="/login-page" element={<Login/>}/>
        <Route key={Math.random()} path="/signup" element={<SignUp/>}/>
        <Route key={Math.random()} path="/meetinglist" element={<MeetingList/>}/>
        <Route key={Math.random()} path="/unit-meeting-info" element={<UnitMeeting/>}/>
        <Route key={Math.random()} path="/createmeeting" element={<CreateMeeting/>}/>
        <Route key={Math.random()} path="/photolist" element={<PhotoList/>}/>
        <Route key={Math.random()} path="/mypage" element={<MyPage/>} />
        <Route key={Math.random()} path="chatting" element= {<Chatting/>}/>
        <Route key={Math.random()} path="/*" element={<NotFound/>} />
        <Route key={Math.random()} path= "/preparing" element={<Preparing/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
