import React, { useEffect, useState } from "react";
import "./style.css";
import M, { Modal } from "materialize-css";
import API from "../../api/admin-routes"
import CreateItem from "../createProductModal"

function LoginModal() {


    const [login, setLogin] = useState ({
        username: '',
        password: '',
        logedIn: ""
    })
      
    const handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value
        setLogin({...login, [name]: value})

    }

    const hanldeFormSubmit = async(event) => {
        event.preventDefault()
       await API.adminLogin(login.username, login.password)
        .then(res => {if(res.data.token === undefined){alert("Invalid Cradentials. Please try again")}localStorage.setItem("Auth", res.data.token); localStorage.setItem("Auth2", res.data.guest)}).then(res => window.location.reload())
        .catch(err => alert("No Known User. Please Re-enter User Data" + err))
    }
    





    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    }, [])
    return (
        <div className="loginModal">
            <div className="container center" id='modalLog'>
                <a href="#login" className="btn btn-large transparent modal-trigger" id="loginBtn">Login</a>
            </div>

            <div id="login" className="modal ">
                <h5 className="modal-close">&#10005;</h5>
                <div className="modal-content center">
                    <h4>Login Form</h4>
                    <br></br>

                    <form action="#">

                        <div className="input-field">
                            <i className="material-icons prefix">person</i>
                            <input placeholder="username" name="username" value={login.username} onChange={handleInputChange} type="text" id="name"></input>
                            
                        </div>
                        <br></br>

                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input placeholder="password" type="password"  name="password" value={login.password} onChange={handleInputChange} id="pass"></input>
                            
                        </div>
                        <br></br>

                        <button onClick={hanldeFormSubmit}  className="btn btn-large">Login</button>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default LoginModal;
