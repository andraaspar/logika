import { createElement } from 'react'
import * as ReactDOM from 'react-dom'
import { AppComp } from './AppComp'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<AppComp />, div)
})
