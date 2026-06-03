import { styled } from "styled-components";

const StyledKeyPad = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 0.5rem;
  background-color: ${({ $type }) =>
    $type === "special"
      ? "#382d7d"
      : $type === "operator"
        ? "#15356d"
        : "#216c6f"};
  color: white;

  &:hover {
    background-color: #285ba5;
    cursor: pointer;
  }
`;

export default function KeyPad({ onInput, value, type, onReset }) {
  return (
    <StyledKeyPad
      $type={type}
      onClick={() => (value === "CE" ? onReset() : onInput(value))}
    >
      {value}
    </StyledKeyPad>
  );
}
