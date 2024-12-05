import styled from "styled-components";
import Header from "../../components/Header";
import { WithChildren } from "../../types";
import { MouseEventHandler, useRef } from "react";

const StyledPageWrapper = styled("div")`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr;
  overflow-x: hidden;
`;

const PageWrapperBody = styled("div")`
  border-top: 1px solid #ddd;
  height: calc(100vh - 64px - 1px); // 1px extra fpr border
  overflow-y: auto;
  overflow-x: hidden;
`;

const PageBottomSpacer = styled("div")`
  height: 120px;
`;

const WindowCoordinates = styled("div")`
  position: fixed;
  top: 4px;
  right: 9px;
  font-family: Elios;
  font-size: 12px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export default function PageWrapper({ children }: WithChildren) {
  const coordinatesRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = ({
    clientX,
    clientY,
  }) => {
    const element = coordinatesRef.current;
    if (element) element.innerHTML = `(${clientX}, ${clientY})`;

    var root = document.querySelector(":root") as HTMLElement;
    root?.style.setProperty("--clientX", `${clientX}px`);
    root?.style.setProperty("--clientY", `${clientY}px`);
  };

  return (
    <>
      <StyledPageWrapper onMouseMove={handleMouseMove}>
        <Header />
        <PageWrapperBody>
          {children}
          <PageBottomSpacer />
        </PageWrapperBody>
      </StyledPageWrapper>
      <WindowCoordinates ref={coordinatesRef}></WindowCoordinates>
    </>
  );
}
