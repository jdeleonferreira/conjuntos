import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import AuthProvider from './auth/AuthProvider';
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
