import React from "react";
import { Heading } from "@chakra-ui/core";
import { User } from "../utils/mockData";

export default function Home() {
  return (
    <div style={{ padding: 25 }}>
      <Heading as="h3" size="xl">
        Welcome, {User[0].name}
      </Heading>
    </div>
  );
}
