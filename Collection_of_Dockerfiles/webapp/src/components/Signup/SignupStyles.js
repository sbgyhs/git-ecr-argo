import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
`;

export const SignUpImage = styled.img`
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 0px;
  height: 100%;
  position: absolute;
`;

export const Overlay = styled.div`
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  bottom: 0px;
  height: 100%;
  display: flex;
  z-index: 10;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgba(0,0,0,0.4);
`;

export const FormRoot = styled.div`
  gap: var(--dl-space-space-unit);
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  z-index: 100;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
`;

export const Form = styled.div`
  gap: var(--dl-space-space-twounits);
  width: auto;
  display: flex;
  max-width: 500px;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  justify-content: flex-end;
  background-color: white; /* Added background color */
  z-index: 1000; /* Ensure the form is above the image */
  position: relative; /* Required to make sure it respects the z-index */
  padding: var(--dl-space-space-unit); /* Optional padding for better spacing */
`;

export const TitleRoot = styled.div`
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h2`
  text-align: center;
`;

export const BodySmall = styled.span`
  font-size: 14px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ButtonFilled = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--dl-color-theme-primary1);
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonOutline = styled.button`
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-color: var(--dl-color-theme-primary1);
  border-style: solid;
  border-width: 1px;
  justify-content: center;
  background: none;
  padding: 10px;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  margin-right: 10px;
`;

export const BodyLarge = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const SignInText = styled.span`
  font-size: 14px;
  text-align: center;
  color: var(--dl-color-theme-primary1);
  cursor: pointer;
`;