
import Login from "./components/Login"
import Profile from "./components/Profile"
import UsercontextProvider from "./context/UsercontextProvider"


function App() {
  

  return (
    <UsercontextProvider>
      <h1>React With ContextApi </h1>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App;
