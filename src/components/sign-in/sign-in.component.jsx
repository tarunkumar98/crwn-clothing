import { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';

class SignIn extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChanges=event=>{
        const {value,name} = event.target;
        this.setState({
            [name]:value
        });
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' label='email' name='email' value={this.state.email} handleChange={this.handleChanges} required/>
                    <FormInput type='password' label='password' name='password' value={this.state.password} handleChange={this.handleChanges} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIN>{' '}SIGN IN WITH GOOGLE{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;