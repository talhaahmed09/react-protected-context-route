import { useAuth } from "../hooks/AuthProvider"

const Login = () => {   
    const {login} = useAuth();

    const handleLogin = () => {
        const user ={
            auth:true
        }
        login(user);
    }
  return (
      <div>
    <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login