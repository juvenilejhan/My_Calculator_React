import { styled } from "styled-components";

const StyledKeyPad = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 0.5rem;
  background-color: #216c6f;
  color: white;
`;

export default function KeyPad({ handleDisplay, value }) {
  return (
    <StyledKeyPad onClick={() => handleDisplay(value)}>{value}</StyledKeyPad>
  );
}
