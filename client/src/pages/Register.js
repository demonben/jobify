import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e);
  };
  const onSubmit = (e) => {
    e.preventDefault(e.target);
    console.log(e);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-input"
          ></input>
          <button type="submit" className="btn btn-block">
            Submit{" "}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
