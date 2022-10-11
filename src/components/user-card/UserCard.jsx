import classes from './UserCard.module.css'

function UserCard({ users }) {
  return (
    <ul className={classes.users}>
      {users.map((u) => (
        <li key={u.id}>
          <h2>{u.name}</h2>
        </li>
      ))}
    </ul>
  )
}

export default UserCard
