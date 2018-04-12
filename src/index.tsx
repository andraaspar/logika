import { createElement } from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppComp } from './comp/AppComp'
import './index.css'
import { rootReducer, State } from './model/State'
import registerServiceWorker from './registerServiceWorker'

const store = createStore<State>(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<AppComp />
	</Provider>,
	document.getElementById('root') as HTMLElement
)
registerServiceWorker()
