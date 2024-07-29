import React from 'react'; 
import { 
  SignUpContainer, 
  SignUpImage, 
  Overlay, 
  FormRoot, 
  Form, 
  TitleRoot, 
  Heading, 
  BodySmall, 
  ButtonContainer, 
  ButtonFilled, 
  ButtonOutline, 
  ButtonImage, 
  BodyLarge, 
  SignInText 
} from './SignupStyles';

const Signup = ({ 
  image1Alt = 'SignUp Image',
  image1Src = '/assets/books.jpg',
  heading1 = 'Create an account',
  content1 = 'Sign up to see details',
  action1 = 'Continue with email',
  action2 = 'Continue with KAKAO',
  action3 = 'Continue with Google',
  imageSrc = '/assets/kakao-200h.png',
  imageAlt = 'image',
  imageSrc1 = '/assets/google-200h.png',
  imageAlt1 = 'image'
}) => {

  const handleGoogleClick = () => {
    window.location.href = 'http://localhost:3000/signup'; // Redirect to the sign-up URL
  };

  return (
    <SignUpContainer>
      <SignUpImage alt={image1Alt} src={image1Src} />
      <Overlay />
      <FormRoot>
        <Form>
          <TitleRoot>
            <Heading>{heading1}</Heading>
            <BodySmall>{content1}</BodySmall>
          </TitleRoot>
          <ButtonContainer>
            <ButtonFilled>{action1}</ButtonFilled>
            <ButtonOutline>
              <ButtonImage src={imageSrc} alt={imageAlt} />
              {action2}
            </ButtonOutline>
            <ButtonOutline onClick={handleGoogleClick}>
              <ButtonImage src={imageSrc1} alt={imageAlt1} />
              {action3}
            </ButtonOutline>
          </ButtonContainer>
          <BodyLarge>
            By creating an account, you agree to the Terms of use and Privacy Policy.
          </BodyLarge>
          <SignInText>Already have an account? Sign in</SignInText>
        </Form>
      </FormRoot>
    </SignUpContainer>
  );
};

export default Signup;