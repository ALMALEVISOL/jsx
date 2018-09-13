import React from "react";
import ReactDOM from "react-dom";
import Ahkin from "ahkin";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Ahkin />, document.getElementById("root"));
registerServiceWorker();
