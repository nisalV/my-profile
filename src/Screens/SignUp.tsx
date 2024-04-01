import { useRef, useState } from 'react'
import { SignUpUserData } from '../Common/types'
import SignUpView from '../Views/AuthenticationFlow/SignUpView'
import ConfirmCodeView from '../Views/AuthenticationFlow/ConfirmCodeView'

const SignUp = () => {
  const userData = useRef<SignUpUserData>({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    code: '',
  })

  const [showConfirmSignUp, setShowConfirmSignUp] = useState(false)

  return (
    <div>
      {!showConfirmSignUp ? (
        <SignUpView
          userData={userData.current}
          onChangeFirstName={(text: string) =>
            (userData.current.firstName = text)
          }
          onChangeLastName={(text: string) =>
            (userData.current.lastName = text)
          }
          onChangeEmail={(text: string) => (userData.current.email = text)}
          onChangePassword={(text: string) =>
            (userData.current.password = text)
          }
          setShowConfirmSignUp={setShowConfirmSignUp}
        />
      ) : (
        <ConfirmCodeView
          userData={userData.current}
          onChangeCode={(text: string) => (userData.current.code = text)}
        />
      )}
    </div>
  )
}

export default SignUp
