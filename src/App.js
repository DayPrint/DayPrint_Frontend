import './App.css';
import { MainPage, LoginPage, PostPage, Comment, AddPostPage,Header } from './component';
import { Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import CommentStyle from './component/CommentStyle';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="post/decor" element={<CommentStyle />} />
        <Route path="/post/comment" element={<Comment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<AddPostPage />} />

      </Routes>
    </div>
  );
}

export default App;
