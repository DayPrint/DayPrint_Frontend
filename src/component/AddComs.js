import React from 'react';
import '../style/css/addcoms.css';


const AddComs = () => {
    return (
        <body>
            <div id="addcoms">
                <div className='content'>
                    <h3>친구에게 메세지를 남겨봐요!</h3>
                    <div className='field'>
                        <label for="nickname" class="fieldtext">닉네임</label>
                        <input type="text" id='nickname' name="nickname" placeholder="닉네임 (최대15자)" maxLength={15}/>
                    </div>
                    <div className="field field_size">
                        <label for="context" class="fieldtext">내용</label>
                        <textarea type="text" id='context' name="context" placeholder='게시글 내용 적기 (최대180자)' rows={5} maxLength={180}/>
                    </div>
                    <div className='addcomsmenu'>
                        <ul className='acm_list'>
                            <li className='acm_save'>
                                <a href=''>
                                    <span className='link'>저장</span>
                                </a>
                            </li>
                            <li className='acm_close'>
                                <a href=''>
                                    <span className='link'>닫기</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    )
};
export default AddComs;