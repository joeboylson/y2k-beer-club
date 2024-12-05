import styled from "styled-components";
import { WithChildren } from "../../types";
import Tag from "../../components/Tag";

const StyledPageWrapper = styled("div")`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
`;

const PageWrapperBody = styled("div")`
  border-top: 1px solid #ddd;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 48px;
`;

const PageBottomSpacer = styled("div")`
  height: 120px;
`;

export default function PageWrapper({ children }: WithChildren) {
  return (
    <StyledPageWrapper>
      <PageWrapperBody>
        {children}
        <PageBottomSpacer />
      </PageWrapperBody>
    </StyledPageWrapper>
  );
}
