import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  ChevronDownIcon,
  PersonIcon,
  SignOutIcon,
} from '@primer/octicons-react'

const UserMenu = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div className="float-right mr-10 mt-4 font-Roboto-300">
        <div
          onClick={() => setMenu(!menu)}
          className="flex ml-10 cursor-pointer items-center"
        >
          <img
            alt="avatar"
            className="mr-2"
            src={
              'https://kredithptangcity.com/wp-content/uploads/2020/11/user.png'
            }
            width={35}
          />

          <ChevronDownIcon size={20} fill="#5C5C5C" />
        </div>

        {menu ? (
          <div className="w-100 absolute bg-white p-2 border border-purple rounded-md mt-2 drop-shadow-lg">
            <ul>
              <li className="flex hover:bg-lightpurple cursor-pointer p-2">
                <NavLink to="/profile">
                  <div className="flex items-center">
                    <PersonIcon size={16} fill="#5C5C5C" />

                    <span className="text-sm ml-2">Profile</span>
                  </div>
                </NavLink>
              </li>

              <li className="flex hover:bg-lightpurple cursor-pointer p-2">
                <div className="flex items-center">
                  <SignOutIcon size={16} fill="#5C5C5C" />

                  <span className="text-sm ml-2">Logout</span>
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default UserMenu
