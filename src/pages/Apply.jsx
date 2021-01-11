import React, { useState } from "react";
import {
  Heading,
  Input,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  useColorMode,
  Textarea,
} from "@chakra-ui/core";

import ErrorMessage from "../components/ErrorMessage";
import { Center } from "@chakra-ui/react";

export default function Apply() {
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [xthMarks, setXthMarks] = useState("");
  const [xiithMarks, setXiithMarks] = useState("");
  const [jeeRank, setJeeRank] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { colorMode } = useColorMode();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      alert("Applied");
      setIsLoading(false);
    } catch (error) {
      setError("Something is wrong");
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: 25 }}>
      <Heading as="h3" size="xl" mb={10}>
        Apply
      </Heading>
      <form onSubmit={handleSubmit}>
        {error && <ErrorMessage message={error} />}
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            placeholder="Full name"
            size="md"
            onChange={(event) => setFullName(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>Father's Name</FormLabel>
          <Input
            placeholder="Father's name"
            size="md"
            onChange={(event) => setFatherName(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>Mother's Name</FormLabel>
          <Input
            placeholder="Mother's name"
            size="md"
            onChange={(event) => setMotherName(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>Address</FormLabel>
          <Textarea
            placeholder="Address"
            size="md"
            onChange={(event) => setAddress(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>Xth Marks</FormLabel>
          <Input
            placeholder="Xth marks"
            size="md"
            onChange={(event) => setXthMarks(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>XIIth Marks</FormLabel>
          <Input
            placeholder="XIIth Marks"
            size="md"
            onChange={(event) => setXiithMarks(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>JEE Rank</FormLabel>
          <Input
            placeholder="JEE Rank"
            size="md"
            onChange={(event) => setJeeRank(event.currentTarget.value)}
          />
        </FormControl>
        <Center>
          <Button variantColor="teal" type="submit" width="250px" mt={8}>
            {isLoading ? (
              <CircularProgress
                isIndeterminate
                size="24px"
                color={colorMode === "light" ? "#f4f4f4" : "#121212"}
              />
            ) : (
              "Apply"
            )}
          </Button>
        </Center>
      </form>
    </div>
  );
}
