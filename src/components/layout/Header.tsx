import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  current_user_btcWallet,
  current_user_email,
  current_user_fullname,
  current_user_ID,
  current_user_login_status,
  user_role,
} from "../../redux/authRedux/userAuthSlice";
import { toast } from "react-toastify";
import CurrentUser from "../../interfaces/currentUserModel";

const Logo = require("../../assets/nova-logo.png");
const activeLink = ({ isActive }: any) =>
  isActive ? "activeLink" : "darkLink";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navigation, setNavigation] = useState(false);
  const toggleNav = () => setNavigation(!navigation);
  const userInfo: CurrentUser = useSelector(
    (state: any) => state.persistedReducer.auth
  );
  const logout = () => {
    try {
      localStorage.clear();
      localStorage.removeItem("persistroot");
      dispatch(current_user_fullname(""));
      dispatch(current_user_ID(""));
      dispatch(current_user_email(""));
      dispatch(current_user_btcWallet(""));
      dispatch(current_user_login_status(false));
      dispatch(user_role(""));
      navigate("/");
      toast.success("User Logged Out");
    } catch (error: any) {
      toast.success(error);
    }
  };

  return (
    <Navigation>
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="company--logo" />
        </Link>
      </div>
      <div className={navigation ? "navLinks" : "navClose"}>
        <NavLink to={"/"} className={activeLink} onClick={toggleNav}>
          HOME
        </NavLink>
        <NavLink to={"/about"} className={activeLink} onClick={toggleNav}>
          ABOUT
        </NavLink>
        <NavLink to={"/faqs"} className={activeLink} onClick={toggleNav}>
          FAQs
        </NavLink>
        <NavLink to={"/contact"} className={activeLink} onClick={toggleNav}>
          CONTACT
        </NavLink>
        {userInfo?.userRole === "Admin" && (
          <>
            <NavLink
              to={"/admin-landing"}
              className={activeLink}
              id="login"
              onClick={toggleNav}
            >
              ADMIN
            </NavLink>
          </>
        )}

        {userInfo?.fullName ? (
          <>
            <NavLink
              to={"/dashboard"}
              className={activeLink}
              id="login"
              onClick={toggleNav}
            >
              DASHBOARD
            </NavLink>
            <button className="LogOut-btn" onClick={logout}>
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <NavLink
              to={"/login"}
              className={activeLink}
              id="login"
              onClick={toggleNav}
            >
              LOGIN
            </NavLink>
            {/* <NavLink
              to={"/register"}
              className={activeLink}
              id="login"
              onClick={toggleNav}
            >
              REGISTER
            </NavLink> */}
          </>
        )}
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <FiMenu />
      </div>
    </Navigation>
  );
};

const Navigation = styled.div`
  width: 100%;
  padding: 0rem 10rem;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--background-color);
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.7rem;
  }
  .logo img {
    width: 10rem;
  }
  .navLinks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }
  .navClose {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }
  .darkLink {
    color: white;
  }
  .activeLink {
    color: var(--primary);
  }
  #login,
  .LogOut-btn {
    font-size: 0.7rem;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 1rem;
    color: white;
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
  }
  .hamburger {
    color: white;
    font-size: 1.2rem;
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .navLinks {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      gap: 2rem;
    }
    .navClose {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      gap: 2rem;
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
    }
    .hamburger {
      color: white;
      font-size: 1.2rem;
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 1rem;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    .logo img {
      width: 10rem;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .navLinks {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      gap: 2rem;
    }
    .navClose {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      gap: 2rem;
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: 10vh;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
    }
    .hamburger {
      color: white;
      font-size: 1.2rem;
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1.5rem 1rem;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .logo img {
      width: 10rem;
    }
    .navLinks {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      padding: 6rem 0;
      transition: var(--transition);
    }
    .navClose {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 5rem;
      position: absolute;
      top: 5vh;
      left: -100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      padding: 2rem 0;
      transition: var(--transition);
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: fit-content;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 3rem;
    }
    .hamburger {
      color: white;
      font-size: 1.5rem;
      display: flex;
      cursor: pointer;
      z-index: 30;
    }
    .logo {
      z-index: 30;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    padding: 1.5rem 1rem;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .navLinks {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      padding: 6rem 0;
      transition: var(--transition);
    }
    .navClose {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 5rem;
      position: absolute;
      top: 0;
      left: -100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      padding: 5rem 0;
      transition: var(--transition);
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: fit-content;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 3rem;
    }
    .hamburger {
      color: white;
      font-size: 1.5rem;
      display: flex;
      cursor: pointer;
      z-index: 30;
    }
    .logo {
      z-index: 30;
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    padding: 1.5rem 1rem;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .navLinks {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      padding: 2rem 0;
      transition: var(--transition);
    }
    .navClose {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 3rem;
      position: absolute;
      top: 0;
      left: -100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      padding: 5rem 0;
      transition: var(--transition);
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: fit-content;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 3rem;
    }
    .hamburger {
      color: white;
      font-size: 1.5rem;
      display: flex;
      cursor: pointer;
      z-index: 30;
    }
    .logo {
      z-index: 30;
    }
  }
`;
export default Header;
