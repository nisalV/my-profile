import { useState } from 'react'
import ConfirmEmailView from '../Views/AuthenticationFlow/ConfirmEmailView'
import ConfirmPasswordView from '../Views/AuthenticationFlow/ConfirmPasswordView'

const FogotPassword = () => {
  const [email, setEmail] = useState<string>('')
  const [isResetRequestSent, setIsResetRequestSent] = useState(false)
  return (
    <>
      {!isResetRequestSent ? (
        <ConfirmEmailView
          email={email}
          setEmail={setEmail}
          onResetRequestSent={setIsResetRequestSent}
        />
      ) : (
        <ConfirmPasswordView email={email} />
      )}
    </>
  )
}

export default FogotPassword
