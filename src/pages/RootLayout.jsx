import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/main-navigation/MainNavigation'

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
