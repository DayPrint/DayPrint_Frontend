import React from 'react';
import '../style/button.css';
import '../style/addpostpage.css';

const AddPostPage = () => {

    let theme = ["Christmas", "New Year", "Birthday", "Graduation", "Marriage"];
    return (
        <div>
            <section>
                <ul id='theme'>
                    {theme.map((th, i) => (
                        <li key={i}>{th}</li>
                    ))
                    }
                </ul>
            </section>
            <section>
                <form>
                    <label for="date">기념일 날짜 : </label>
                    <input type="datetime-local" id="date"></input>
                    <label for="theme">테마 : </label>
                    {theme.map((th, i) => (
                        <input type="radio" id="theme" checked>th</input>
                    ))
                    }
                </form>
            </section>
        </div>
    )
}

export default AddPostPage;