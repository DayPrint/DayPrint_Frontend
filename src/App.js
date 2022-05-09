import './App.css';
import MainPage from './component/MainPage';
import LoginPage from './component/LoginPage';
import PostPage from './component/PostPage';
import { Route, Routes } from 'react-router-dom';
import Comment from './component/Comment';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/comment" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
