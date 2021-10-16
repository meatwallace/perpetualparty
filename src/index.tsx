import { render } from "react-dom";
import { isDevelopment } from "./config";
import { registerDebugUtils } from "./app/utils/registerDebugUtils";

import App from "./App";

const rootElement = document.getElementById("root");

render(<App />, rootElement);

if (isDevelopment) {
  registerDebugUtils();
}
