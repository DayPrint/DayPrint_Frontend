import React from 'react';
import '../style/button.css';
import '../style/addpostpage.css';

const AddPostPage = () => {

  const theme = ['Christmas', 'New Year', 'Birthday', 'Graduation', 'Marriage'];
  return (
    <div>
      <div>
        <ul id="theme">
          {theme.map((th, i) => {
            return <li>{th}</li>
          })}
        </ul>
      </div>
      <div>
        <form>
          <label for="date">기념일 날짜 : </label>
          <input type="datetime-local" id="date"></input>
          <label for="theme">테마 : </label>
          {theme.map((th, i) => {
            <input type="radio" id="theme" checked>th</input>
          })}
        </form>
      </div>
    </div>
  );
};

export default AddPostPage;