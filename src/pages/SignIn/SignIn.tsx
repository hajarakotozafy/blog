import { FC } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./SignIn.scss";
import SignInIllustration from "../../assets/images/illustration_dashboard.svg"

const SignIn:FC = () => {
    return(
        <div className="signin-container">
            <div className="signin-illustration">
                <div className="content">
                    <h2 className="signin-title">Hi, Welcome back</h2>
                    <img src={SignInIllustration}/>
                </div>
            </div>
            <LoginForm/>
        </div>
    )
}

export default SignIn;