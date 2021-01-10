import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
  useColorMode,
} from "@chakra-ui/core";

import { userLogin } from "../utils/mockApi";
import ErrorMessage from "../components/ErrorMessage";
import { Link, Route, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../firebase/firebase.utils";
import Home from "./Home";

export default function Login() {
  const [users, setUsers] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const { colorMode } = useColorMode();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await userLogin({ email, password });
      setIsLoggedIn(true);
      setIsLoading(false);
      setShowPassword(false);
      history.push("/home");
    } catch (error) {
      setError("Invalid username or password");
      setIsLoading(false);
      setEmail("");
      setPassword("");
      setShowPassword(false);
    }
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex width="full" align="center" justifyContent="center" pt={10}>
      {isLoggedIn ? (
        <>
          <Home />
        </>
      ) : (
        <>
          <Box
            p={8}
            maxWidth="500px"
            minWidth="400px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
            <Box textAlign="center">
              <Heading mb={6}>Login</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={handleSubmit}>
                {error && <ErrorMessage message={error} />}
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    size="lg"
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired mt={6}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="*******"
                      size="lg"
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
                    />
                    <InputRightElement width="3rem">
                      <Button
                        h="1.5rem"
                        size="sm"
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <Icon name="view-off" />
                        ) : (
                          <Icon name="view" />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button variantColor="teal" type="submit" width="full" mt={8}>
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color={colorMode === "light" ? "#f4f4f4" : "#121212"}
                    />
                  ) : (
                    "Sign In"
                  )}
                </Button>
                <Link to="/signup">
                  <Button
                    variantColor="teal"
                    variant="outline"
                    width="full"
                    mt={4}
                  >
                    New here? Create Account
                  </Button>
                </Link>
                <Text textAlign="center" mt={4}>
                  or
                </Text>
                <Button
                  variantColor="teal"
                  width="full"
                  mt={4}
                  variant="outline"
                  onClick={signInWithGoogle}
                >
                  Sign in with Google
                </Button>
              </form>
            </Box>
          </Box>
        </>
      )}
    </Flex>
  );
}
