import { Provider } from 'react-redux'
import { Router } from './components/Router/router';
import { store } from './Store/store';

const App = () => (
	<Provider store={store}>
		<Router/>
	</Provider>
)

export default App;