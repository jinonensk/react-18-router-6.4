import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/main-navigation/MainNavigation'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>Произошла ошибка!</h1>
        <p>{error.message}</p>
      </main>
    </>
  )
}

export default ErrorPage
