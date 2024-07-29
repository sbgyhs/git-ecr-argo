import React from 'react';
import {
  SignInContainer,
  SignInMaxWidth,
  SignInContent,
  SignInForm,
  SignInTitle,
  SignInText,
  SignInInputContainer,
  SignInLabel,
  SignInInput,
  SignInButton,
  SignInDivider,
  SignInDividerLine,
  SignInDividerText,
  SignInSocialButtons,
  SignInSocialButton,
  SignInSocialIcon,
  SignInAlternativeContainer,
  SignInAlternativeText,
  SignInAlternativeButton,
} from './SigninStyles';

const SignIn = (props) => {
  return (
    <SignInContainer>
      <SignInMaxWidth>
        <SignInContent>
          <SignInForm>
            <SignInTitle>{props.heading1}</SignInTitle>
            <SignInText>{props.content1}</SignInText>
            <form>
              <SignInInputContainer>
                <SignInLabel htmlFor="sign-in-email">Email</SignInLabel>
                <SignInInput type="email" id="sign-in-email" placeholder="Email address" required />
              </SignInInputContainer>
              <SignInInputContainer>
                <SignInLabel htmlFor="sign-in-password">Password</SignInLabel>
                <SignInInput type="password" id="sign-in-password" placeholder="Password" required />
              </SignInInputContainer>
              <SignInButton type="submit">{props.action1}</SignInButton>
            </form>
            <SignInDivider>
              <SignInDividerLine />
              <SignInDividerText>OR</SignInDividerText>
              <SignInDividerLine />
            </SignInDivider>
            <SignInSocialButtons>
              <SignInSocialButton>
                <SignInSocialIcon src={props.imageSrc} alt={props.imageAlt} />
                <span>KAKAO</span>
              </SignInSocialButton>
              <SignInSocialButton>
                <SignInSocialIcon src={props.imageSrc1} alt={props.imageAlt1} />
                <span>Google</span>
              </SignInSocialButton>
            </SignInSocialButtons>
          </SignInForm>
          <SignInAlternativeContainer>
            <SignInAlternativeText>{props.heading2}</SignInAlternativeText>
            <SignInText>{props.content2}</SignInText>
            <SignInAlternativeButton type="submit">{props.action2}</SignInAlternativeButton>
          </SignInAlternativeContainer>
        </SignInContent>
      </SignInMaxWidth>
    </SignInContainer>
  );
};

SignIn.defaultProps = {
  heading2: 'Create an account',
  action1: 'Sign in',
  content2: '회원가입',
  heading1: 'Sign in to your account',
  content1: '로그인',
  action2: 'Create an account',
  imageSrc: '/assets/kakao-200h.png',
  imageAlt: 'Kakao icon',
  imageSrc1: '/assets/google-200h.png',
  imageAlt1: 'Google icon',
};

export default SignIn;
