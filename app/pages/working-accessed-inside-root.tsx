import { NextPage } from "next";
import React from "react";
import { MyEnum } from "../types";

// In this example, a value is accessed on MyEnum.
// The enum is imported from inside the application root.

const Page: NextPage = () => {
  const option: MyEnum = MyEnum.OPTION_ONE;
  return <div>Hello world {option}</div>;
};

export default Page;
