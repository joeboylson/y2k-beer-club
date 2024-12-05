import { WithChildren } from "../../types";
import styled from "styled-components";

type _props = WithChildren & {
  onClick: (() => void) | ((event: React.MouseEvent<HTMLElement>) => void);
};

const StyledMinimalButton = styled("button")`
  width: fit-content;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export default function MinimalButton({ onClick, children }: _props) {
  return (
    <StyledMinimalButton onClick={onClick}>{children}</StyledMinimalButton>
  );
}
