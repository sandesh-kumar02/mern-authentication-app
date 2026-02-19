import { useState } from "react";
import axios from "axios";
import styles from "../style.module.css";
import { useNavigate } from "react-router-dom";

function FormComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile", { replace: true });
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    }

    form.classList.add("was-validated");

    try {
      await axios.post("http://localhost:3000/signup", formData);
    } catch (err) {
      console.log(err);
    }

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="container p-4 ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className={`${styles.signupGradient} col-md-6`}>
          <h1>Welcome! Sign Up Now and Unlock Amazing Features ✨</h1>
          <form className="needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="col-12 ">
              <label htmlFor="validationCustom01" className="form-label">
                First name :
              </label>
              <input
                type="text"
                name="username"
                className="form-control w-100"
                id="validationCustom01"
                required
                placeholder="enter your username"
                value={formData.username}
                onChange={handleChange}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-12">
              <label htmlFor="validationCustom01" className="form-label">
                Email :
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="validationCustom01"
                required
                placeholder="enter your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please fill this field</div>

            <div className="col-12">
              <label htmlFor="validationCustom01" className="form-label">
                Password :
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="validationCustom01"
                required
                placeholder="enter your Password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div>
              <div className="col-12">
                <button className="btn btn-primary mt-3" type="submit">
                  Submit form
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className=" mt-4" onClick={handleClick}>Profile Page</button>
    </div>
  );
}

export default FormComponent;
