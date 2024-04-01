import { useRef } from 'react'
import SignInView from '../Views/AuthenticationFlow/SignInView'

const SignIn = () => {
  const userData = useRef<{ email: string; password: string }>({
    email: '',
    password: '',
  })

  return (
    <SignInView
      userData={userData.current}
      onChangeEmail={(text: string) => (userData.current.email = text)}
      onChangePassword={(text: string) => (userData.current.password = text)}
    />
  )
}

export default SignIn
