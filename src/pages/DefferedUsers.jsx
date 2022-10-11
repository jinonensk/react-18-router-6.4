import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import UserCard from '../components/user-card/UserCard'
import { getUsersSlowly } from '../util/api'

function DefferedUsersPage() {
  const loaderData = useLoaderData()
  return (
    <>
      <h1>Наши пользователи</h1>
      <Suspense fallback={<p>Загрузка...</p>}>
        <Await
          resolve={loaderData.users}
          errorElement={<p>Ошибка при загруки пользователей.</p>}
        >
          {(loaderData) => <UserCard users={loaderData} />}
        </Await>
      </Suspense>
    </>
  )
}

export default DefferedUsersPage

export function loader() {
  return defer({ users: getUsersSlowly() })
}
