import { AppRoutes } from "./AppRoutes";
import AuthProvider from "./context/AuthProvieder.jsx";

function App() {
	return (
	<AuthProvider>
		<AppRoutes />
	</AuthProvider>
	);
}

export default App;
