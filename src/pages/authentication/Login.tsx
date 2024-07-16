import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import styled from "styled-components";
import MainLayout from "../../components/layout/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { base_Url } from "../../redux/authRedux/userAuthService";
import userModel from "../../interfaces/userModel";
import {
  current_signed_in_user,
  current_user_login_status,
  user_role,
} from "../../redux/authRedux/userAuthSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsLoading(true);
    // const res = await loginUser({
    //   email: userInput.email,
    //   password: userInput.password,
    // });
    try {
      const response = await axios.post(
        `${base_Url}auth/login`,
        {
          email: userInput.email,
          password: userInput.password,
        },
        {
          withCredentials: true,
        }
      );
      if (response?.data?.result) {
        const token = response?.data?.result?.token;
        const { fullName, id, email, role, isBlocked }: userModel =
          jwtDecode(token);
        console.log(token);
        if (isBlocked === true) {
          setIsLoading(false);
          return toast.error("User Blocked, Please contact Admin");
        }
        dispatch(
          current_signed_in_user({ fullName, id, email, role, isBlocked })
        );
        dispatch(current_user_login_status(true));
        dispatch(user_role(role));
        navigate("/");
        setIsLoading(false);
        return toast.success("Login Successful");
      }
    } catch (error: any) {
      if (error.message === "Request failed with status code 400") {
        return toast.error("Username or password is incorrect");
      }
      return toast.error(error?.response?.data?.errorMessages?.$values[0]);
    }

    //  const token = res?.token;
    //  const { fullName, id, email, role, isBlocked }: userModel =
    //    jwtDecode(token);
    // console.log(res)

    //   if (res) {

    //   if (isBlocked === true) {
    //     setIsLoading(false);
    //     return toast.error("User Blocked, Please contact Admin");
    //   }
    //   else {
    //     dispatch(
    //       current_signed_in_user({ fullName, id, email, role, isBlocked })
    //     );
    //     dispatch(current_user_login_status(true));
    //     dispatch(user_role(role))
    //     navigate("/");
    //     setIsLoading(false);

    //     return toast.success("Login Successful");
    //   }
    // }
  };

  return (
    <MainLayout>
      {isLoading && <Loader />}
      <LogPage>
        <div className="overlay"></div>
        {/* <video className="video" src={Background} autoPlay loop muted /> */}
        <div className="auth-content">
          <h1 className="heading">Sign Into Your Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email *"
              name="email"
              value={userInput?.email}
              onChange={(e) => handleInputChange(e)}
            />
            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={userInput.password}
              onChange={(e) => handleInputChange(e)}
            />
            <input type="submit" className="submit" value="LOGIN" />
          </form>
          <br />
          <div className="dont-have">
            <p className="have-account">
              Forgot Password?
              <Link to={"/forgot-password"}>Click Here</Link>
            </p>
            <p className="have-account">
              Dont have an account?{" "}
              <Link to={"/register"}>Register New Account</Link>
            </p>
          </div>
        </div>
      </LogPage>
    </MainLayout>
  );
};

const LogPage = styled.div`
  width: 100%;
  height: 83vh;
  position: relative;
  overflow: hidden;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 5;
  }
  .auth-content {
    position: absolute;
    top: 20%;
    left: 0;
    z-index: 8;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 1rem;
      .password {
        width: 100%;
        position: relative;
        .eye-reveal {
          position: absolute;
          top: 0.5rem;
          right: 1rem;
          cursor: pointer;
        }
      }
      .submit {
        background: var(--primary);
        color: white;
        font-weight: 500;
        letter-spacing: 1px;
        border: 1px solid var(--primary);
        transition: var(--transition);
        &:hover {
          border: 1px solid var(--primary);
          color: var(--primary);
          background: none;
        }
      }
      .form-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
      }
      input {
        width: 100%;
        padding: 0.5rem;
        background: transparent;
        border: 1px solid var(--primary);
        color: white;
      }
      .form-checkbox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1rem;
        font-weight: 500;
        input {
          width: fit-content;
        }
        p {
          width: 100%;
          margin-top: 0.9rem;
          a {
            text-decoration: none;
            color: var(--primary);
            font-weight: 600;
          }
        }
      }
    }
  }
  .dont-have {
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: space-between;
  }
  .have-account a {
    text-decoration: none;
    color: var(--primary);
    font-weight: 600;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 83vh;
    position: relative;
    overflow: hidden;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: none;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .auth-content {
      position: absolute;
      top: 20%;
      left: 0;
      z-index: 8;
      color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      form {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        .password {
          width: 100%;
          position: relative;
          .eye-reveal {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            cursor: pointer;
          }
        }
        .submit {
          background: var(--primary);
          color: white;
          font-weight: 500;
          letter-spacing: 1px;
          border: 1px solid var(--primary);
          transition: var(--transition);
          &:hover {
            border: 1px solid var(--primary);
            color: var(--primary);
            background: none;
          }
        }
        .form-input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: white;
        }
        .form-checkbox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 1rem;
          font-weight: 500;
          input {
            width: fit-content;
          }
          p {
            width: 100%;
            margin-top: 0.9rem;
            a {
              text-decoration: none;
              color: var(--primary);
              font-weight: 600;
            }
          }
        }
      }
    }
    .dont-have {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 83vh;
    position: relative;
    overflow: hidden;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: none;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .auth-content {
      position: absolute;
      top: 20%;
      left: 0;
      z-index: 8;
      color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      form {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        .password {
          width: 100%;
          position: relative;
          .eye-reveal {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            cursor: pointer;
          }
        }
        .submit {
          background: var(--primary);
          color: white;
          font-weight: 500;
          letter-spacing: 1px;
          border: 1px solid var(--primary);
          transition: var(--transition);
          &:hover {
            border: 1px solid var(--primary);
            color: var(--primary);
            background: none;
          }
        }
        .form-input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: white;
        }
        .form-checkbox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 1rem;
          font-weight: 500;
          input {
            width: fit-content;
          }
          p {
            width: 100%;
            margin-top: 0.9rem;
            a {
              text-decoration: none;
              color: var(--primary);
              font-weight: 600;
            }
          }
        }
      }
    }
    .dont-have {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 83vh;
    position: relative;
    overflow: hidden;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: none;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .auth-content {
      position: absolute;
      top: 20%;
      left: 0;
      z-index: 8;
      color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        .password {
          width: 100%;
          position: relative;
          .eye-reveal {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            cursor: pointer;
          }
        }
        .submit {
          background: var(--primary);
          color: white;
          font-weight: 500;
          letter-spacing: 1px;
          border: 1px solid var(--primary);
          transition: var(--transition);
          &:hover {
            border: 1px solid var(--primary);
            color: var(--primary);
            background: none;
          }
        }
        .form-input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: white;
        }
        .form-checkbox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 1rem;
          font-weight: 500;
          input {
            width: fit-content;
          }
          p {
            width: 100%;
            margin-top: 0.9rem;
            a {
              text-decoration: none;
              color: var(--primary);
              font-weight: 600;
            }
          }
        }
      }
    }
    .dont-have {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default Login;
