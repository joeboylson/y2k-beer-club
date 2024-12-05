import styled from "styled-components";

export default function Divider() {
  const StyledDivider = styled("div")`
    width: 100%;
    height: 0;
    border-top: 1px solid #ddd;
  `;

  return <StyledDivider />;
}
