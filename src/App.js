import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route,Routes} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import { AuthProvider } from "./hooks/AuthProvider";
function App() {

  return(
    <AuthProvider >
      <h1>Welcome to App</h1>
    <Routes>
       <Route path='/' element={<Home />}/>
      <Route index element={<Login/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/profile" element={<Profile/>} />
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </AuthProvider>
  )
}

export default App;
