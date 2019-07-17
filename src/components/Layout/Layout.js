import React from "react";
import "./Layout.css";

const layout = props => (
  <>
    <div>toolbar sidebar bascdrop</div>
    <main className="Content">{props.children}</main>
  </>
);

export default layout;
