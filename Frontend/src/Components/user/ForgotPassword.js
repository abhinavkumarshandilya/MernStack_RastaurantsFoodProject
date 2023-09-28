import React,{useState,useEffect} from 'react';
import { useAlert } from 'react-alert';
import { useDispatch,useSelector } from 'react-redux';
import { forgotPassword,clearErrors } from '../../actions/userActions';


 const ForgotPassword = ()=> {
    const[email,setEmail]=useState("");
    const alert=useAlert();
    const dispatch=useDispatch();
    const{error,loading,message}=useSelector(
        (state)=>state.forgotPassword

    );
    useEffect(()=>{
    if(error){
        alert.error(error);
        dispatch(clearErrors());
    }if(message){
        alert.success(message);
    }
        
    }, [dispatch,alert,error,message]);
    const submitHandler=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        dispatch(forgotPassword(formData));
    };


  return(
    <>
    <div className="row wrapper">
        <div className="col-10 col-lg-5">
            <form className="shadow-lg" onSubmit={submitHandler}>
                <h1 className="mb-3">Forgot Password</h1>
                <div className="form-group">
                <label htmlfor="email_field"> Enter Email</label>
                    <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <button
                    id="forget_password_button"
                    type="submit"
                    className="btn btn-block py-3"
                    disable={loading?true:false}>SendEmail
                </button>
            </form>
        </div>
    </div>
    </>
  );
    
  
};

export default ForgotPassword;
