import React, {useState} from 'react';

const RegistrationForm = props =>{
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        confirmPassword:""
    });

    const changeFirstName = e =>{
        setState({...state, firstName: e.target.value});
    }
    const changeLastName = e =>{
        setState({...state, lastName: e.target.value});
    }
    const changeEmail = e =>{
        setState({...state, email: e.target.value});
    }
    const changePassword = e =>{
        setState({...state, password: e.target.value});
    }
    const changeConfirmPassword = e =>{
        setState({...state, confirmPassword: e.target.value});
    }

    return(
        <div className = "container">
            <form>
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        className="form-control col-sm-9"
                        onChange = {changeFirstName}
                        value = {state.firstName}
                    />
                </div>
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control col-sm-9"
                        onChange = {changeLastName}
                        value = {state.lastName}
                    />
                </div>
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">Email</label>
                    <input
                        type="text"
                        className="form-control col-sm-9"
                        onChange = {changeEmail}
                        value = {state.email}
                    />
                </div>
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">Password</label>
                    <input
                        type="password"
                        className="form-control col-sm-9"
                        onChange = {changePassword}
                        value = {state.password}
                    />
                </div>                
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control col-sm-9"
                        onChange = {changeConfirmPassword}
                        value = {state.confirmPassword}
                    />
                </div>                

                
            </form>

            <div>
                <h4 className="text-center">Your Form Data:</h4>
                <div className ="row">
                    <div className="col-sm-3">
                        <div className ="col-sm-12">
                            <div className="content">First Name</div>
                        </div>
                        <p></p>
                        <div className ="col-sm-12">
                            <div className="content">Last Name</div>
                        </div>
                        <p></p>
                        <div className ="col-sm-12">
                            <div className="content">Email</div>
                        </div>
                        <p></p>
                        <div className ="col-sm-12">
                            <div className="content">Password</div>
                        </div> 
                        <p></p>
                        <div className ="col-sm-12">
                            <div className="content">Confirm Password</div>
                        </div>                        
                    </div>
                    <div className="col-sm-4">
                        <div className ="col-sm-12">
                            <div className="content">&nbsp;{state.firstName}</div>
                        </div>
                        <p></p>
                        <div className ="col-sm-12">
                            <div className="content">&nbsp;{state.lastName}</div>
                        </div>
                        <p></p>
                        <div className ="col-sm-12">
                            <div className="content">&nbsp;{state.email}</div>
                        </div>
                        <p></p>
                        <div className ="col-sm-12">
                            <div className="content">&nbsp;{state.password}</div>
                        </div> 
                        <p></p>
                        <div className ="col-sm-12">
                            <div className="content">&nbsp;{state.confirmPassword}</div>
                        </div>  
                    

                    </div>              
                </div>

            </div>
        </div>
    );
}

export default RegistrationForm;