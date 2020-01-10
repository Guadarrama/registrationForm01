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
                    <div className="text-danger">
                        <p>
                            &nbsp;{(state.firstName.length<2) ?
                                "First name must be at least 2 characters": ''}
                        </p>
                    </div>

                </div>
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control col-sm-9"
                        onChange = {changeLastName}
                        value = {state.lastName}
                    />
                    <div className="text-danger">
                        <p>
                            &nbsp;{(state.lastName.length<2) ?
                                "Last name must be at least 2 characters": ''}
                        </p>
                    </div>
                </div>
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">Email</label>
                    <input
                        type="text"
                        className="form-control col-sm-9"
                        onChange = {changeEmail}
                        value = {state.email}
                    />
                    <div className="text-danger">
                        <p>
                            &nbsp;{(state.email.length<5) ?
                                "Email must be at least 5 characters": ''}
                        </p>
                    </div>
                </div>
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">Password</label>
                    <input
                        type="password"
                        className="form-control col-sm-9"
                        onChange = {changePassword}
                        value = {state.password}
                    />
                    <div className="text-danger">
                        <p>
                            &nbsp;{(state.password.length<8) ?
                                "Password must be at least 8 characters": ''}
                        </p>
                    </div>
                </div>                
                <div className="form-row p-2">
                    <label className ="col-sm-2 col-form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control col-sm-9"
                        onChange = {changeConfirmPassword}
                        value = {state.confirmPassword}
                    />
                    <div className="text-danger">
                        <p>
                            &nbsp;{(state.confirmPassword.length<8) ?
                                "Password must be at least 8 characters": ''}
                        </p>
                    </div>
                    <div className="text-danger">
                        <p>
                            &nbsp;{(state.confirmPassword != state.password) ?
                                "Passwords must match": ''}
                        </p>
                    </div>                    
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