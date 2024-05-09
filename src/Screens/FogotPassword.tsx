import { useState } from 'react'
import ConfirmEmailView from '../Views/AuthenticationFlow/ConfirmEmailView'
import ConfirmPasswordView from '../Views/AuthenticationFlow/ConfirmPasswordView'

const FogotPassword = () => {
  const [email, setEmail] = useState<string | null>(null)
  return (
    <>
      {!email ? (
        <ConfirmEmailView setEmail={setEmail} />
      ) : (
        <ConfirmPasswordView email={email} />
      )}
    </>
  )
}

export default FogotPassword
