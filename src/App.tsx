import * as stylex from '@stylexjs/stylex'
import { Route, Router } from 'wouter'
import Welcome from './Screens/Welcome'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import FogotPassword from './Screens/FogotPassword'

const Styles = stylex.create({
  wrapper: {
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    backgroundColor: 'lightblue',
  },
})

function App() {
  return (
    <div {...stylex.props(Styles.wrapper)}>
      <Router>
        <Route path="/" component={Welcome} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/fogot-password" component={FogotPassword} />
      </Router>
    </div>
  )
}

export default App
