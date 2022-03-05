import { TextField } from "@material-ui/core";
import {
    AccountCircleOutlined,
    ErrorOutlineTwoTone,
    KeyboardArrowDown,
} from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./signin.css";

const Signin1 = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const [checkbox, setCheckbox] = useState(false);

    const history = useHistory();
    const handleCheckbox = () => {
        setCheckbox(!checkbox);
    };
    const handleInput = (e) => {
        setEmail(e.target.value);
        if (e.target.value < 1) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 1) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleRedirect = () => {
        history.push("/signin");
    };

    return (
        <div className="signin">
            <div className="signin__wrapper">
                <div className="signin__block">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt=""
                        className="signin__logo"
                    />
                    <h3 className="signin__heading">Chào mừng</h3>
                    <div
                        className="signin__name-account"
                        onClick={handleRedirect}
                    >
                        <div className="signin__name-account--wrapper">
                            <AccountCircleOutlined className="signin__name-icon" />
                            <span className="signin__name-account--text">
                                tranvandong@gmail.com
                            </span>
                            <KeyboardArrowDown className="signin__name-icon" />
                        </div>
                    </div>

                    <form className="signin__form">
                        <TextField
                            error={error}
                            id="outlined-basic"
                            label="Nhập mật khẩu của bạn"
                            variant="outlined"
                            type={checkbox ? "text" : "password"}
                            fullWidth
                            className="signin__input"
                            onChange={handleInput}
                        />
                        {error && (
                            <div className="error">
                                <ErrorOutlineTwoTone className="errorIcons" />
                                <p className="signinv2__error">
                                    Nhập mật khẩu của bạn
                                </p>
                            </div>
                        )}
                        <div className="signinv2__form-check--block">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                onChange={handleCheckbox}
                                className="signinv2__checkbox"
                            />
                            <span className="signinv2__form-display--password">
                                Hiện mật khẩu
                            </span>
                        </div>
                        <div className="signin__button">
                            <button className="signin__btn-link">
                                Bạn quên mật khẩu ?
                            </button>
                            <button
                                className="signin__btn"
                                onClick={handleSubmit}
                            >
                                Tiếp theo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin1;
