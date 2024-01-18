import React from "react";
import ReactDOM from 'react-dom/client';


//react element
// react.createElement creates  a react element which is object i.e in this case heading
// render function takes the object converts it into html element and push it to the browser
const headingg = React.createElement(
    "h1",
    { id:"heading"
    },
    "Namaste React 🚀"
);

// JSX - is not html inside javascript but the html-like or XML-like syntax
// javascript broweser does not understands jsx, it only understands javascript ecmacript all versions 
// jsx transpiled by (parcel => babel(js transpiler -converts code into react code)) before reaches to the browser
// JSX => React.createElement => ReactElement(object) =>Html Element(render)
//babel-javascript compiler-and transpiler is converting the code


// React elememt - jsx code is a react element
const heading =  (
<h1 id="heading">
    Namaste React using jsx
    </h1>
)

// way to render react element 
//root.render(heading);

// everything  in react is a component
//React components
//class based - old
//functional component - new - just a normal javascript function which return some jsx code or react element
// use 1st letter uppercase

//1st way to write functional component
const Title = () => (
<h1 className="head" tabIndex="5">
    Namaste react title</h1>);

// 2nd way to write a functional component
const HeadingComponent = () =>{
    return <div id="container">
        <Title/>
        {heading}                   
        <h1 className="headinng">
         Namaste react functional component</h1>
    </div>
}

// ways to render react component 
// root.render(<HeadingComponent />);

//what is component composition
// using a react component inside another is called as componnet composition

//we can use react element inside componnet using curly brackets






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
