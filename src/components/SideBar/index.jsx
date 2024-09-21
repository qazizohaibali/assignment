import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router
import { ReactComponent as SidePar } from "../../assets/sideBar/sidePar.svg";
import { ReactComponent as FaboaWithPar } from "../../assets/sideBar/faboaWithPar.svg";
import { SidebarItems, switchCaseIcon } from "./siderbarItems";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer({ curentIndex, setIndex }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <CssBaseline />
      <DrawerHeader className="permanentCus">
        {open ? (
          <FaboaWithPar
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              cursor: "pointer",
            }}
          />
        ) : (
          <SidePar
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              cursor: "pointer",
            }}
          />
        )}
      </DrawerHeader>

      <List className="permanentCus">
        {SidebarItems.map((item, index) => (
          <ListItem key={item?.text} disablePadding sx={{ display: "block" }}>
            <NavLink
              to={item?.link} // Use NavLink to link to the item's route
              style={{ textDecoration: "none", color: "inherit" }} // Optional: Remove underline and inherit color
              onClick={() => setIndex(index)}
            >
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                        padding: 1,
                        marginLeft: 1,
                        marginRight: 5,
                        backgroundColor:
                          curentIndex === index ? "#264C00" : null,
                        borderRadius: 3,
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                          padding: 1,
                          backgroundColor:
                            curentIndex === index ? "#264C00" : null,
                          borderRadius: 2,
                        }
                      : {
                          mr: "auto",
                          padding: 1,
                          backgroundColor:
                            curentIndex === index ? "#264C00" : null,
                          borderRadius: 2,
                        },
                  ]}
                >
                  {switchCaseIcon(index)}
                </ListItemIcon>
                <ListItemText
                  primary={item?.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                          color: "#fff",
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
