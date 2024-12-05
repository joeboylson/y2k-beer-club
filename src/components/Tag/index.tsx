import styled from "styled-components";
import { WithChildren } from "../../types";

const StyledTag = styled("div")`
  background-color: black;
  width: fit-content;
  border-radius: 100px;
  padding: 0 8px;
  color: white;
  font-size: 12px;
  font-family: Elios;
  white-space: nowrap;
`;

export default function Tag({ children }: WithChildren) {
  return <StyledTag>{children}</StyledTag>;
}
