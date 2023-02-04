import type { FC, ReactElement } from "react";
import {styled} from "@mui/material";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  children: ReactElement;
};

const StyledMain = styled('main')`
  min-height: 100vh;
  width: 100vw;
  /* margin-left: 84px; */
  padding: 0;
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
