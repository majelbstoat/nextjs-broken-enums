import { NextPage } from "next";
import React from "react";
import { MyEnum } from "../types";

// In this example, no values are accessed on MyEnum.
// The enum is imported from inside the application root.

const Page: NextPage = () => {
  const option: MyEnum = 1;
  return <div>Hello world {option}</div>;
};

export default Page;
