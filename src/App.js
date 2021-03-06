import './App.css';
import { MainPage, LoginPage, PostPage, AddPostPage } from './component';
import { Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import AddComs from './component/AddComs';
import EditPostPage from './component/EditPostPage';
import ApiError from './component/ApiError';
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
        <Route path="/edit/:id" element={<EditPostPage />} />
        <Route path="/post/comment/:id" element={<AddComs />} />
        <Route path="/api/error" element={<ApiError />} />
      </Routes>
    </div>
  );
}

export default App;
