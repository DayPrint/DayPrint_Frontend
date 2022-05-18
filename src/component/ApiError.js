import { useNavigate } from "react-router-dom"
import authService from "../service/auth.service";


const ApiError= () => {
    const navigator = useNavigate();
    authService.logout();
    navigator("/login");
    return (
        <div>error.</div>
    );
}

export default ApiError