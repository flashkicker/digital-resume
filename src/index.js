import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"

import * as serviceWorker from "./serviceWorker"
import App from "./components/App"

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.querySelector("#root")
)

serviceWorker.unregister()
