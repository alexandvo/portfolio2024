import { useTheme } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuToggle from "./MenuToggle";
import SectionDrawer from "./SectionDrawer";
import NavBar from "./NavBar";

const TopLevelNavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { isExSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } =
    theme.ss;
  return (
    <>
      {isMediumScreen && location.pathname !== "/" && <NavBar />}
      {!isMediumScreen && location.pathname !== "/" && (
        <>
          <MenuToggle setOpen={setOpen} />
          <SectionDrawer setOpen={setOpen} open={open} />
        </>
      )}
    </>
  );
};

export default TopLevelNavBar;
