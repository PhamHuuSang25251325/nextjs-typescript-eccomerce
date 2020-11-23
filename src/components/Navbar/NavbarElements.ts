import styled, { keyframes } from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  z-index: 100;
`;

export const SocialCallContainer = styled.div`
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIcon = styled.a`
  display: inline-block;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;

  &:hover {
    color: #0b9d8a;
    transition: all ease 0.3s;
  }
`;

export const Phone = styled.div`
  color: rgba(0, 0, 0, 0.7);
  margin-left: 30px;
  font-size: 0.9rem;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 45px;

  @media screen and (max-width: 768px) {
    padding: 15px 45px;
  }
`;

export const NavLogo = styled.a`
  img {
    height: 30px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
  margin: 20px;
  display: flex;
  text-transform: uppercase;
  font-weight: 500;
  a {
    color: #555555;
  }
  a:hover {
    color: #0b9d8a;
    transition: all ease 0.3s;
  }
`;

export const MobileIcon = styled.a`
  margin: 0px 10px;
  font-size: 1.2rem;
  display: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    color: #0b9d8a;
    transition: all ease 0.3s;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const RightMenu = styled.div``;

export const RightMenuBtn = styled.a`
  margin: 0px 10px;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    color: #0b9d8a;
    transition: all ease 0.3s;
  }
  span {
    position: absolute;
    top: -17px;
    right: -17px;
    width: 25px;
    height: 25px;
    font-size: 0.8rem;
    border-radius: 50%;
    background-color: #0b9d8a;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
  }
`;

const search = keyframes`
 0%{
        bottom: -300px;
    }
    100%{
        bottom: 0px;
    }
`;

const fade = keyframes`
  0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const SearchBarContainer = styled.div<{ active: boolean }>`
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  position: fixed;
  left: 0px;
  bottom: 0px;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  justify-content: center;
  box-shadow: 2px -5px 30px rgba(0, 0, 0, 0.1);
  z-index: 101;
  animation: ${search} 0.3s;
`;

export const SearchInput = styled.div`
  width: 90%;
  border-bottom: 2px solid #555555;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: 20px;

  input {
    width: 100%;
    padding: 30px;
    border: none;
    outline: none;
    font-size: 2rem;
    margin: 20px;
    padding: 0px 20px;
  }
`;

export const SearchCancel = styled.a`
  color: #272727;
  font-size: 2rem;
  padding-right: 40px;
`;

export const FormContainer = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 102;
`;

export const LoginFormContainer = styled.div<{ isSignUp: boolean }>`
  width: 420px;
  padding: 20px 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
  display: ${({ isSignUp }) => (isSignUp ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  position: relative;
  animation: ${fade} 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

export const FormContent = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const FormBtnCancel = styled.a`
  position: absolute;
  right: 20px;
  top: 10px;
  color: #868686;
`;

export const FormHeader = styled.strong`
  color: #272727;
  font-size: 2rem;
  margin: 2px 7px 7px 7px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 90%;
  height: 45px;
  margin: 6px 0px;
  padding: 0px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  border-radius: 7px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const FormBtnSubmit = styled.button`
  background-color: #0b9d8a;
  color: #ffffff;
  border: none;
  outline: none;
  text-transform: uppercase;
  border-radius: 3px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 6px 0px;
  padding: 10px 10px;
  cursor: pointer;
`;

export const ForgotAndSignUp = styled.div<{ isSignUp: boolean }>`
  width: 90%;
  display: flex;
  justify-content: ${({ isSignUp }) => (isSignUp ? 'flex-end' : 'space-between')};
  align-items: center;
  margin-top: 10px;
`;

export const ForgotLink = styled.a`
  color: #4d4d4d;
  font-size: 0.9rem;
`;

export const SignUpBtn = styled.button`
  border: none;
  border-bottom: 1px solid #868686;
  line-height: 16px;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
