import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--dl-space-space-unit);
`;

export const SignInMaxWidth = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInContent = styled.div`
  width: auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dl-color-theme-accent1);
  padding: var(--dl-space-space-twounits);
  border-radius: var(--dl-radius-radius-cardradius);
`;

export const SignInForm = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignInTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: var(--dl-space-space-unit);
`;

export const SignInText = styled.p`
  font-size: 1rem;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
`;

export const SignInInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--dl-space-space-unit);

  &:not(:last-child) {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
`;

export const SignInLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 4px;
`;

export const SignInInput = styled.input`
  width: 100%;
  padding: var(--dl-space-space-oneandhalfunits);  /* Increased padding for a larger input area */
  font-size: 1.125rem;  /* Increased font size for better readability */
  border: 1px solid var(--dl-color-theme-primary1);
  border-radius: 4px;
  background-color: white;
`;

export const SignInButton = styled.button`
  width: 100%;
  padding: var(--dl-space-space-unit);
  background-color: var(--dl-color-theme-primary1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: var(--dl-space-space-oneandhalfunits);
`;

export const SignInDivider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: var(--dl-space-space-oneandhalfunits) 0;
`;

export const SignInDividerLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: var(--dl-color-theme-primary1);
`;

export const SignInDividerText = styled.p`
  margin: 0 var(--dl-space-space-unit);
  font-size: 1rem;
`;

export const SignInSocialButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: var(--dl-space-space-unit);
`;

export const SignInSocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--dl-space-space-halfunit);
  border: 1px solid var(--dl-color-theme-primary1);
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: var(--dl-space-space-unit);
  }
`;

export const SignInSocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-halfunit);
`;

export const SignInAlternativeContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-cardradius);
  margin-top: var(--dl-space-space-oneandhalfunits);
`;

export const SignInAlternativeText = styled.h2`
  font-size: 2rem;
  margin-bottom: var(--dl-space-space-unit);
`;

export const SignInAlternativeButton = styled.button`
  width: 100%;
  padding: var(--dl-space-space-unit);
  background-color: var(--dl-color-theme-primary1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: var(--dl-space-space-unit);
`;