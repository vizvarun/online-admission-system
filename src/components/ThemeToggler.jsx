import React, { useState } from "react";
import {
  useColorMode,
  Box,
  IconButton,
  Text,
  Button,
  CircularProgress,
} from "@chakra-ui/core";
import { Link, Route, useLocation, NavLink } from "react-router-dom";

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  function navLinks() {
    return (
      <>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <NavLink to="/home">
            <li style={{ marginRight: 30 }}>Home</li>
          </NavLink>
          <NavLink to="/apply">
            <li style={{ marginRight: 30 }}>Apply</li>
          </NavLink>
          <NavLink to="/feespayment">
            <li>Fees payment</li>
          </NavLink>
        </ul>
      </>
    );
  }

  return (
    <Box
      p="4"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg={colorMode === "light" ? "#EDF2F7" : "#2D3748"}
    >
      <Text fontSize="xl" ml={3}>
        E-Admission System
      </Text>
      <div style={{ display: "flex", alignItems: "center" }}>
        {location.pathname === "/home" || "/apply" || "/feespayment"
          ? navLinks()
          : null}
        <IconButton
          size="lg"
          icon={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
          variant="ghost"
          ml={5}
          mr={15}
        />
        {location.pathname === "/home" || "/apply" || "/feespayment" ? (
          <>
            <Link to="/">
              <Button variantColor="teal" variant="outline" size="md" mr={4}>
                {isLoading ? (
                  <CircularProgress
                    isIndeterminate
                    size="24px"
                    color={colorMode === "light" ? "#f4f4f4" : "#121212"}
                  />
                ) : (
                  "Logout"
                )}
              </Button>
            </Link>
          </>
        ) : null}
      </div>
    </Box>
  );
}
