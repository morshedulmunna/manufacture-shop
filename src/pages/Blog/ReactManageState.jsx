import React from "react";

const ReactManageState = () => {
  return (
    <>
      <div className="mt-28">
        <h1 className="font-bold text-3xl pb-6">
          What are the different ways to manage a state in a React application?
        </h1>
        <img
          className="h-[500px] w-full object-cover"
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/690102/retina_1708x683_image_0-1967657e3078be54d78ccc4d57eae106-f763757d0bd43e58ff9976083b458547.png"
          alt=""
        />
        <h2 className="text-2xl font-bold my-6">
          So many Way to Manage a State in a react Application
        </h2>
        <ul className="text-xl list-decimal font-bold ml-5">
          <li>React Hook : Context Api</li>
          <li>Redux - State Management Tools</li>
        </ul>
        <h2 className="text-xl mt-12 font-bold">
          What is Context API ? - React Router Hook Context API ?
        </h2>
        <p>
          the Context API helps to avoid prop drilling in our React application.
          if you don't know about the term prop drilling. So let's understand
          that first. ________________ In React, we can pass the data only in a
          single direction, i.e. from top to down (parent to child) via props.
          Prop drilling is a process where we need to pass down the props at
          each level in a deeply nested component tree so that we can access
          them in the component at the lowest level. Context in React just
          provides a way to pass the data directly to the required components
          rather than passing them through every level of the component tree. So
          using React Context, we don't have to pass the props unnecessarily to
          all those intermediate components that do not need the props.
        </p>
        <h2 className="text-xl mt-12 font-bold">Introduction to React-Redux</h2>
        <p>
          The ones familiar with react will know that react is a component-based
          front end library tool that connects the various segments of the web
          page. In react, we use props (short for properties) in a component
          which allows the usage of non-static variables. With the help of
          props, we can pass these variables into various other components
          (child components) from the parent component. Example: Passing props
          from parent component to child component:
        </p>
      </div>
    </>
  );
};

export default ReactManageState;
