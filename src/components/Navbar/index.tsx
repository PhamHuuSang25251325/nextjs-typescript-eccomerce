import React, { useState } from 'react';
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes,
} from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';
import AppLink from '../AppLink';
import {
  ForgotAndSignUp,
  ForgotLink,
  FormBtnCancel,
  FormBtnSubmit,
  FormContainer,
  FormContent,
  FormHeader,
  FormInput,
  LoginFormContainer,
  MobileIcon,
  Nav,
  Navigation,
  NavItem,
  NavLogo,
  NavMenu,
  Phone,
  RightMenu,
  RightMenuBtn,
  SearchBarContainer,
  SearchCancel,
  SearchInput,
  SignUpBtn,
  SocialCallContainer,
  SocialIcon,
} from './NavbarElements';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <>
      <Nav>
        <SocialCallContainer>
          <div>
            <SocialIcon href="/">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="/">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="/">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="/">
              <FaYoutube />
            </SocialIcon>
          </div>
          <Phone>
            <span>Call: +123456789</span>
          </Phone>
        </SocialCallContainer>
        <Navigation>
          <NavLogo>
            <img src="/images/logo.png" alt="logo" />
          </NavLogo>
          <MobileIcon>
            <FcMenu />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <AppLink href="/" label="Home" />
            </NavItem>
            <NavItem>
              <AppLink href="/shop" label="Shop" />
            </NavItem>
            <NavItem>
              <AppLink href="/men" label="Men" />
            </NavItem>
            <NavItem>
              <AppLink href="/women" label="Women" />
            </NavItem>
            <NavItem>
              <AppLink href="/kid" label="Kid" />
            </NavItem>
          </NavMenu>
          <RightMenu>
            <RightMenuBtn onClick={() => setActive((atv) => !atv)}>
              <FaSearch />
            </RightMenuBtn>
            <RightMenuBtn
              onClick={() => {
                setShow((s) => !s);
                setIsSignUp(false);
              }}
            >
              <FaUser />
            </RightMenuBtn>
            <RightMenuBtn>
              <FaShoppingCart />
              <span>0</span>
            </RightMenuBtn>
          </RightMenu>
        </Navigation>
      </Nav>
      <SearchBarContainer active={active}>
        <SearchInput>
          <input />
          <SearchCancel onClick={() => setActive((atv) => !atv)}>
            <FaTimes />
          </SearchCancel>
        </SearchInput>
      </SearchBarContainer>
      <FormContainer show={show}>
        <LoginFormContainer isSignUp={!isSignUp}>
          <FormHeader>Login</FormHeader>
          <FormBtnCancel onClick={() => setShow((s) => !s)}>
            <FaTimes />
          </FormBtnCancel>
          <FormContent>
            <FormInput placeholder="email" />
            <FormInput type="password" placeholder="password" />
          </FormContent>
          <FormBtnSubmit>Login</FormBtnSubmit>
          <ForgotAndSignUp isSignUp={isSignUp}>
            <ForgotLink href="/">Forgot password?</ForgotLink>
            <SignUpBtn onClick={() => setIsSignUp((s) => !s)}>Create Account</SignUpBtn>
          </ForgotAndSignUp>
        </LoginFormContainer>
        <LoginFormContainer isSignUp={isSignUp}>
          <FormHeader>Sign Up</FormHeader>
          <FormBtnCancel onClick={() => setShow((s) => !s)}>
            <FaTimes />
          </FormBtnCancel>
          <FormContent>
            <FormInput placeholder="name" />
            <FormInput placeholder="email" />
            <FormInput type="password" placeholder="password" />
          </FormContent>
          <FormBtnSubmit>Sing up</FormBtnSubmit>
          <ForgotAndSignUp isSignUp={isSignUp}>
            <SignUpBtn onClick={() => setIsSignUp((s) => !s)}>Already Account?</SignUpBtn>
          </ForgotAndSignUp>
        </LoginFormContainer>
      </FormContainer>
    </>
  );
};

export default NavBar;
