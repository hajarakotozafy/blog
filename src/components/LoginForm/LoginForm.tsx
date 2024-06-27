import { FC, FormEvent } from "react";
import "./LoginForm.scss";
import { useInput } from "../../hooks/UseInput";
import Input from '../Input/Input';
import Button from "../Button/Button";
import { IoIosInformationCircle } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import FirebaseIcon from "../../assets/images/ic_firebase.svg";

const LoginForm: FC = () => {

    const emailInput = useInput('');
    const passwordInput = useInput('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        validateInput(emailInput);
        validateInput(passwordInput);
        console.log("email > ", emailInput, "pwd > ", passwordInput) 
    }

    const validateInput = (input: { value: string; setError: (value: boolean) => void }) => {
        if(!input.value.trim()){
        input.setError(true)
        }else{
        input.setError(false)
        }
    }

    const onForgotPwd = () => {
        console.log("I forgot my password");
    }
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <div>
                        <h3>Sign in to Test</h3>
                        <p>New user? <span>Create an account</span></p>
                    </div>
                    <img src={FirebaseIcon}/>
                </div>
                <div className="login-info">
                    <span>
                        <IoIosInformationCircle/>
                    </span>
                    <p>Use email : <span>demo@local.test</span> / password : <span>demo1234</span></p>
                </div>
                <Input
                    type="email"
                    label="Email Adress"
                    name="email"
                    errorMessage="Invalid Email"
                    {...emailInput}
                    />
                <Input
                    type="password"
                    label="Password"
                    name="password"
                    errorMessage="Invalid Password"
                    {...passwordInput}
                />
                <span onClick={onForgotPwd} className="forgot-pwd">Forgot password?</span>
                <Button color="primary">Login</Button>
                <div className="sso-buttons">
                    <div className="separator">
                        <p>OR</p>
                    </div>
                    <div className="social-buttons">
                        <span><FaGoogle/></span>
                        <span><FaGithub/></span>
                        <span><FaTwitter/></span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;