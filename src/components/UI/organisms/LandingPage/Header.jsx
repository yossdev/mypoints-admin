import logo from '../../../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

import ButtonRegister from '../../atoms/Button/Register'
import ButtonLogin from '../../atoms/Button/Login'

const Header = () => {
  return (
    <div className="relative select-none bg-white sm:flex sm:items-center h-16 w-full p-3 shadow-md border-t-8 border-purple">
      <img className="ml-28" alt="logo ungu" src={logo} width={175} />

      <div className="sm:flex sm:items-stretch sm:flex-no-shrink sm:flex-grow">
        <div className="sm:flex sm:items-stretch sm:justify-end ml-auto">
          <NavLink to="/login">
            <ButtonLogin />
          </NavLink>
          <NavLink to="/register">
            <ButtonRegister />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
