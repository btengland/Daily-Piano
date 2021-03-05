import './reset.css'
import './App.css';
import routes from './routes'
import Header from './Components/Header/Header'
import {useContext, useEffect} from 'react'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'
import { UserContext } from './context/UserContext'

function App() {
  const userContext = useContext(UserContext)

  useEffect(() => {
    userContext.getUser()
  }, [])

  return (
    <div className="App">
      {userContext.user && <Header />}
      {routes}
      <NotificationContainer />
    </div>
  );
}

export default App;
