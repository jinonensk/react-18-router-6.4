import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

const config = [
  {
    path: '/',
    text: 'Домашняя',
  },
  {
    path: '/blog',
    text: 'Блог',
  },
  {
    path: '/slow-users',
    text: 'Юзеры',
  },
]

const setActive = ({ isActive }) => (isActive ? classes.active : undefined)

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {config.map((el) => (
            <li>
              <NavLink to={el.path} className={setActive} end>
                {el.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
