import React from "react";

const ProtoType = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold my-6">
        How does prototypical inheritance work?
      </h1>
      <p>
        {" "}
        {`In a class-based model, you have Classes, which are represented by the triple “<Parents, Variables, Methods>”. Where:

Parents is the list of classes you’re extending. Classes may only extend other classes;
Variables is the number of variable slots that instances will have. For example, a “class Point2d(int x, int y) { … }” has 2 instance variables;
Methods is a table of “name → function” that describes which services each instance of the class will support;
Instances (or Objects) in a class-based model are represented with the tuple “<Class, Values>”. Where:

Class is a pointer to the class triple that defines how many variables this instance supports, and what methods you can call on it;
Values is a list of the values for each variable the instance has.
In this model, Classes only describe how instances look like, and Instances are the only thing you can interact with. Classes cannot be instances, and you can’t inherit from Instances.

“Inheritance” just means “a concatenation of the layouts”`}{" "}
      </p>
    </div>
  );
};

export default ProtoType;
