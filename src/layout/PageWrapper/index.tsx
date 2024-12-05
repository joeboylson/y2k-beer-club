import styled from "styled-components";
import { WithChildren } from "../../types";
import Tag from "../../components/Tag";

const StyledPageWrapper = styled("div")`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 1fr;
  overflow-x: hidden;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;

  > * {
    margin-right: 8px;
  }
`;

const PageWrapperBody = styled("div")`
  border-top: 1px solid #ddd;
  height: calc(100vh - 64px - 1px); // 1px extra for border
  overflow-y: auto;
  overflow-x: hidden;
`;

const PageBottomSpacer = styled("div")`
  height: 120px;
`;

export default function PageWrapper({ children }: WithChildren) {
  return (
    <StyledPageWrapper>
      <HeaderWrapper>
        <code>Questions?</code>
        <Tag>joeboylson@gmail.com</Tag>
        <Tag>513-667-2371 (text only)</Tag>
      </HeaderWrapper>

      <PageWrapperBody>
        {children}
        <PageBottomSpacer />
      </PageWrapperBody>
    </StyledPageWrapper>
  );
}
