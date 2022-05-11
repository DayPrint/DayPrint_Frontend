import React, { useState } from 'react';
import '../style/button.css';
import '../style/addpostpage.css';

const AddPostPage = () => {
    const theme=['Christmas', 'New Year', 'Birthday', 'Graduation', 'Marriage'];
    const Theme={
        "Christmas":"Christmas",
        "NewYear":"New Year",
        "Birthday":"Birthday",
        "Graduation":"Graduation",
        "Marriage":"Marriage"
    }
    const [thema,setTheme]=useState(Theme.Christmas);
    const changeTheme=(params,e)=>{
        //this.thema=Theme.e.target.value;
        const {value,name}=e.target;
        console.log(value,name);
        console.log(params);
    }
    // this.setState = {
    //     selectList: ['Christmas', 'New Year', 'Birthday', 'Graduation', 'Marriage'],
    //     selectValue: "Christmas"
    // };

    // const onChange = (e) => {
    //     this.setState({ selectValue: e.target.value });
    // }
    return (
        <div>
            <div>
                <ul id="theme">
                    {theme.map((th, i) => {
                        return <li onClick={changeTheme} value={th}>{th}</li>
                    })}
                </ul>
            </div>
            <div>
            
                <form>
                    <label for="date">기념일 날짜 : </label>
                    <input type="datetime-local" id="date"></input>
                    <p>테마 : </p>
                    {/* {theme.map((th, i) => {
                        <React.Fragment key={i}>
                            <input id={th} value={th} name="theme" type="radio" checked={this.state.selectValue == th} onChange={this.onChange} />
                        </React.Fragment>
                    })} */}
                </form>
            </div>
        </div>
    );
};

export default AddPostPage;