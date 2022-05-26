import React from "react";

const UseState = () => {
  return (
    <div>
      <img
        className="mt-12"
        src="https://daveceddia.com/images/useState-hook-twitter.png"
        alt=""
      />
      <h1 className="text-3xl font-bold my-5">
        Why you do not set the state directly in React. For example, if you have
        const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h1>

      <p>
        The useState() is a Hook that allows you to have state variables in
        functional components. React has two types of components, one is class
        components which are ES6 classes that extend from React and the other is
        functional components. Class components a Component and can have state
        and lifecycle methods: class Message extends React. The useState hook is
        a special function that takes the initial state as an argument and
        returns an array of two entries. Syntax: The first element is the
        initial state and the second one is a function that is used for updating
        the state.
      </p>

      <p className="mt-6">
        We can also pass a function as an argument if the initial state has to
        be computed. And the value returned by the function will be used as the
        initial state.
      </p>
      <h1 className="font-bold">
        Importing: To use useState you need to import useState from react as
        shown below:
      </h1>
    </div>
  );
};

export default UseState;
