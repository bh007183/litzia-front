import React, { useEffect } from "react";
import "./style.css";
import M from "materialize-css";

function LoginModal() {
    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    }, [])
    return (
        <div className="loginModal">
            <div className="container center">
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
                            <input type="text" id="name"></input>
                            <label for="name">Username</label>
                        </div>
                        <br></br>

                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input type="password" id="pass"></input>
                            <label for="pass">Password</label>
                        </div>
                        <br></br>

                        <input type="submit" value="Login" className="btn btn-large"></input>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default LoginModal;
