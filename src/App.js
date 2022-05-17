import './App.css';
import { MainPage, LoginPage, PostPage, Comment, AddPostPage } from './component';
import { Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import './style/styles.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/comment" element={<Comment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<AddPostPage />} />
      </Routes>
    </div>
  );
}

export default App;
