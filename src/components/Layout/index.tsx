import type { FC, ReactElement } from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  children: ReactElement;
};

const StyledMain = styled.main`
  min-height: 100vh;
  width: 100vw;
  padding: 20px 40px;
`;

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <header>
        <Sidebar />
      </header>
      <StyledMain>{children}</StyledMain>
    </div>
  );
};
