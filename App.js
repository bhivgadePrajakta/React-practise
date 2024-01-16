import React from "react";
import ReactDOM from 'react-dom';

const heading = React.createElement("h1", {id: "heading"}, "Hello world using React");

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",
{id:"parent"},
[
    React.createElement("div",{id:"child"},
[
React.createElement("h1",{},"Hello prajakta this side 🌸"),
React.createElement("h2",{},"i am an h2 tag"),
]),
React.createElement("div",{id:"child2"},
[
React.createElement("h1",{},"Hello i am h1 tag"),
React.createElement("h2",{},"i am an h2 tag"),
]),
]);

root.render(parent);
