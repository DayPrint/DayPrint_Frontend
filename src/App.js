import './App.css';
import { MainPage, LoginPage, PostPage, Comment, AddPostPage } from './component';
import { Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import AddComs from './component/AddComs';
import './style/styles.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<AddPostPage />} />
        <Route path="/post/comment/:id" element={<AddComs />} />
      </Routes>
    </div>
  );
}

export default App;
