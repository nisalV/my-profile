import { useState } from 'react'
import { SignUpUserData } from '../Common/types'
import SignUpView from '../Views/AuthenticationFlow/SignUpView'
import ConfirmCodeView from '../Views/AuthenticationFlow/ConfirmCodeView'

const SignUp = () => {
  const [userData, setUserData] = useState<SignUpUserData>({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    code: '',
  })
  const [showConfirmSignUp, setShowConfirmSignUp] = useState(false)

  function updateUserdata(key: string, data: string) {
    setUserData({ ...userData, [key]: data })
  }

  return (
    <>
      {!showConfirmSignUp ? (
        <SignUpView
          userData={userData}
          onChange={(key: string, value: string) => updateUserdata(key, value)}
          setShowConfirmSignUp={setShowConfirmSignUp}
        />
      ) : (
        <ConfirmCodeView
          userData={userData}
          onChange={(key: string, value: string) => updateUserdata(key, value)}
        />
      )}
    </>
  )
}

export default SignUp
