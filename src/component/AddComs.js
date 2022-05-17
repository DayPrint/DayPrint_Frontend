import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import commentService from '../service/comment.service';
import '../style/css/addcoms.css';


const AddComs = (props) => {
    const navigator = useNavigate();
    const params = useParams();
    const [inputs, setInputs]=useState({
        author:"",
        text:"",
        postId:params.id,
      })
    const onChange=e=>{
        setInputs({
        ...inputs,
        [e.target.name]:e.target.value
        });
        console.log([e.target.name]+":"+[e.target.value]);
    };
    const handleAdd= async ()=>{
        await commentService.addComment(inputs);
        navigator("/post/"+params.id);
    }
    const handleCancle = () => {
        navigator("/post/"+params.id);
    }

    return (
        <body>
            <div id="addcoms">
                <div className='content'>
                    <h3>친구에게 메세지를 남겨봐요!</h3>
                    <div className='field'>
                        <label for="nickname" class="fieldtext">닉네임</label>
                        <input type="text" id='nickname' name="author" placeholder="닉네임 (최대15자)" maxLength={15} onChange={onChange}/>
                    </div>
                    <div className="field field_size">
                        <label for="context" class="fieldtext">내용</label>
                        <textarea type="text" id='context' name="text" placeholder='게시글 내용 적기 (최대180자)' rows={5} maxLength={180} onChange={onChange}/>
                    </div>
                    <div className='addcomsmenu'>
                        <ul className='acm_list'>
                            <li className='acm_save'>
                                <button onClick={handleAdd}>
                                    <span className='link'>저장</span>
                                </button>
                            </li>
                            <li className='acm_close'>
                                <button onClick={handleCancle}>
                                    <span className='link'>닫기</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    )
};
export default AddComs;