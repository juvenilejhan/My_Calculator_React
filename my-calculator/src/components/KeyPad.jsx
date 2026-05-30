import { styled } from "styled-components";

const StyledKeyPad = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.5rem;
`;

export default function KeyPad({ value }) {
  return <StyledKeyPad>{value}</StyledKeyPad>;
}
