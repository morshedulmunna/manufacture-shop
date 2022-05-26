import React from "react";

const ReactOptimize = () => {
  return (
    <div>
      <div className="flex gap-10 flex-col lg:flex-row ">
        <div>
          <img
            className="w-full "
            src="https://blog.logrocket.com/wp-content/uploads/2021/09/5-react-performance-optimization-techniques.png"
            alt=""
          />
        </div>
        <div className="w-full lg:1/2 md:w-1/2">
          <h1 className="font-bold text-2xl pb-5">
            How will you improve the performance of a React Application?
          </h1>
          <p>
            Optimizing application performance is key for developers who are
            mindful of keeping a users experience positive to keep them on an
            app and engaged. According to research by Akamai, a second delay in
            load time can cause a 7 percent reduction in conversions, making it
            imperative for developers to create apps with optimized performance.
            <br />
            <br />
            In React applications, we are guaranteed a very fast UI by default.
            However, as an application grows, developers may encounter some
            performance issues.
          </p>

          <ul className="py-3">
            <li className="text-2xl font-bold">1. useMemo()</li>
          </ul>
          <p>
            This is a React hook that is used to cache functions in React,
            CPU-expensive functions.
          </p>
          <ul className="py-3">
            <li className="text-2xl font-bold">2. Virtualize long lists</li>
          </ul>
          <p>
            If you render large lists of data, it is recommended that you render
            only a small portion of the datasets at a time within the visible
            viewport of a browser, then the next data are rendered as the lists
            is scrolled, this is called “windowing”.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactOptimize;
