const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World heyyy"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

console.log(heading); //object

/**
 * <div id = 'parent'>
 *   <div id = 'child'>
 *      <h1>I am h1 tag</h1>
 *   </div>
 * </div>
 */
// * How to create Nested Elements
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am H1 tag")
  )
);

root.render(parent);

// How to create Siblings
// * <div id = 'parent'>
// *   <div id = 'child'>
// *      <h1>I am h1 tag</h1>
//        <p>I am Akshata</p>
// *   </div>
// * </div>
// */

const sibling = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("p", {}, "I am Akshata"),
  ])
);
root.render(sibling);