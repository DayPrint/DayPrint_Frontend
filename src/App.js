import './App.css';
import { MainPage, LoginPage, PostPage, Comment, AddPostPage } from './component';
import { Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import './style/styles.css';
import { useState } from 'react';

function App() {
  const [postData,setPostData]=useState();
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostPage data={postData}/>} />
        <Route path="/post/comment" element={<Comment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<AddPostPage />} />
      </Routes>
    </div>
  );
}

export default App;
