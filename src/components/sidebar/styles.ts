import { styled, css } from "styled-components";
// import SidebarItem from "./components/sidebarItem";

interface ISidebarWrapper {
  isActive: boolean
}

export const SidebarWrapper = styled.div<ISidebarWrapper>`
  width: 30%;
  border-right: 1px solid ${(props) => props.theme.dark.main};

  ${(props) => !props.isActive && css`
    width: 50px;
    overflow: hidden;
  `}
`;
