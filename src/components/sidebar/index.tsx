import React, { useState } from "react";
import "./styles.css";
import SidebarItem from "./components/sidebarItem";
import { SidebarWrapper } from "./styles";

const Sidebar: React.FC = () => {
  const [sidebars, setSidebar] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
  ]);
  
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <SidebarWrapper isActive>
      <button onClick={() => setIsActive(!isActive)}>Collapse</button>
      {isActive && (
        <ul>
          {sidebars.map((item) => (
            <SidebarItem label={item} />
          ))}
        </ul>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
