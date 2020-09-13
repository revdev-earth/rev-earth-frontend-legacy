import React from 'react'

import { ThemeProvider } from 'styled-components'
import { ContextProvider } from './context'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import './css/App.css'
import 'normalize.css'

/** Return './.theme.json' || {} */
const getLocalTheme = () => {
	try {
		return require('./static/theme.json')
	} catch (err) {
		return {}
	}
}

function App() {
	return (
		<ThemeProvider theme={getLocalTheme() || {}}>
			<ContextProvider>
				<div className='App'>
					<Header />
					<Content />
					<Footer />
				</div>
			</ContextProvider>
		</ThemeProvider>
	)
}

export default App
