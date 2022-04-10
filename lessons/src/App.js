import { Provider } from 'react-redux'
import { Router } from './components/Router/router';
import { persistor, store } from './Store/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<Router/>
		</PersistGate>
	</Provider>
)

export default App;