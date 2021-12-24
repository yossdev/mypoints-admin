import logo from '../atoms/logo.svg'
import ButtonLogin from '../atoms/Button'

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="relative select-none bg-white lg:flex lg:items-center h-16 w-full p-3 shadow-md border-t-8 border-purple">
      <img className="ml-28" alt="logo ungu" src={logo} width={175} />

      <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
          <NavLink to="/login">
            <ButtonLogin />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
