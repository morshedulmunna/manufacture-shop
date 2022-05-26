import React from "react";
import ProtoType from "./ProtoType";
import ReactManageState from "./ReactManageState";
import ReactOptimize from "./ReactOptimize";
import Unitetest from "./Unitetest";
import UseState from "./UseState";

const Blog = () => {
  return (
    <div className="lg:container  container mx-auto lg:px-12 px-2 mt-12 mb-12">
      <ReactOptimize />
      <ReactManageState />
      <ProtoType />
      <UseState />
      <Unitetest />
    </div>
  );
};

export default Blog;
