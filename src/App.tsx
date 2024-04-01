import * as stylex from '@stylexjs/stylex'
import { Route, Router } from 'wouter'
import Welcome from './Screens/Welcome'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import FogotPassword from './Screens/FogotPassword'
import Home from './Screens/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  currentAuthenticatedUser,
  currentSession,
} from './Common/Authentication'

const Styles = stylex.create({
  wrapper: {
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    backgroundColor: 'lightblue',
  },
})

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div {...stylex.props(Styles.wrapper)}>
        <Router>
          <Route path="/" component={Welcome} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/fogot-password" component={FogotPassword} />
          <Route path="/home" component={Home} />
        </Router>
      </div>
    </QueryClientProvider>
  )
}

export default App
