import './App.css';
import { MainPage, LoginPage, PostPage, Comment, AddPostPage,Header } from './component';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<AddPostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/page" element={<PostPage />} />
        <Route path="/page/comment" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
