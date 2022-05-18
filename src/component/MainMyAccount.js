import React from 'react';
import '../style/styles.css';
import authService from '../service/auth.service';

const MainMyAccount = () => {
    return (
        <div className="MyAccount">
            {localStorage.getItem('user') === 'undefind' || localStorage.getItem('user') === null
                ?
                <div className="account">지금 로그인해서 기념일을 친구와 공유해보세요!</div>
                :
                <div className="account">환영합니다 {authService.getCurrentUser().username}님! 기념일을 친구와 공유해보세요!</div>
            }
        </div>
    )
}

export default MainMyAccount;
