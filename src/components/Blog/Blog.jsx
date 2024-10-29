import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="space-y-2 my-5">
            <h3 className="bg-blue-300">1. When should you use context API?</h3>
            <p className="bg-blue-200">
              It should be used in the following cases:
              <ol>
                <li>
                  Global state management: if you want to manage global state
                  which will be accessed by many components it is used. You
                  don't have to pass props through many levels of nested
                  components if you use this.
                </li>
                <li>
                  Cross-component communication: if you have multiple components
                  that need to interact with each other.
                </li>
              </ol>
            </p>
            <h3 className="bg-blue-300">What is a custom hook?</h3>
            <p className="bg-blue-200">
              A custom hook is a reusable function that encapsulates common
              logic, such as state management or side effects, and can be used
              across multiple functional components. Custom hooks are typically
              created using the "use" prefix in their function name and follow
              the rules of hooks in React, allowing them to interact with
              component lifecycle and state. Custom hooks are a way to abstract
              complex logic and share it across different components in a React
              application. They allow developers to encapsulate logic into a
              separate function that can be reused in multiple components,
              promoting code reusability, maintainability, and separation of
              concerns.
            </p>
            <h3 className="bg-blue-300">What is useRef?</h3>
            <p className="bg-blue-200">
              useRef is a hook in React, that allows you to create a mutable
              reference to a value that persists across renders. It is often
              used to directly access and modify DOM elements in a React
              component without triggering re-renders. useRef returns an object
              with a current property that can be used to store any mutable
              value, such as a DOM element, and persist its value between
              renders. Unlike state variables created with useState, changes to
              the current property of a useRef object will not trigger
              re-renders of the component. useRef can be used in a variety of
              scenarios, such as accessing and manipulating DOM elements,
              managing focus, storing previous values for comparison in
              useEffect, and storing any mutable value that needs to persist
              across renders without triggering re-renders. It is important to
              note that useRef does not trigger a re-render when its current
              value changes, so it should not be used to manage state that
              requires reactivity in the UI. For that, useState or other state
              management solutions in React should be used instead.
            </p>
            <h3 className="bg-blue-300">What is useMemo?</h3>
            <p className="bg-blue-200">
              useMemo is a hook in React, that allows you to memoize the result
              of a computation and only recalculate it when its dependencies
              change. This can help optimize the performance of your React
              components by preventing unnecessary recalculations of expensive
              computations. The useMemo hook takes two arguments: a function and
              an array of dependencies. The function represents the computation
              that you want to memoize, and the array of dependencies represents
              the values that the computation depends on. If any of the
              dependencies change, React will recalculate the memoized value. If
              none of the dependencies change, React will return the previously
              memoized value, avoiding the need to recalculate the result.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
