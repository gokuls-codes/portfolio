import React from "react";

const TestPage = () => {
  return (
    <div className=" h-[200vh] bg-blue-900 border-red-200 border ">
      <div className=" sticky top-0 w-full h-[200px] bg-red-300"></div>
      <div className=" absolute top-0 h-screen">
        <h1>Test heading</h1>
        <p>Test desc</p>
      </div>
      <div className=" absolute top-[100vh] h-screen">
        <h1>Test heading 2</h1>
        <p>Test desc 2</p>
      </div>
    </div>
  );
};

export default TestPage;
