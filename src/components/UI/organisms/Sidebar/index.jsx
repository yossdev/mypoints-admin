import { Link, NavLink } from 'react-router-dom'

import { PersonIcon, TagIcon, GiftIcon, HomeIcon } from '@primer/octicons-react'

import logoWhite from '../../../../assets/logo-white.svg'

const Sidebar = () => {
  return (
    <>
      <div className="fixed w-1/5 float-left top-0 left-0 bottom-0 h-full bg-purple shadow flex-col justify-between sm:flex font-roboto">
        <div className="pl-5 pr-5">
          <Link to="/">
            <div className="h-16 w-full pl-2 flex items-center">
              <img alt="logo white" src={logoWhite} width={175} />
            </div>
          </Link>

          <ul className="mt-5">
            <NavLink to="/dashboard">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <HomeIcon size={20} />
                  <span className="text-md ml-2">Dashboard</span>
                </div>
              </li>
            </NavLink>

            <NavLink to="/agent">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <PersonIcon size={20} />
                  <span className="text-md  ml-2">Agents</span>
                </div>
              </li>
            </NavLink>

            <NavLink to="/product">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <TagIcon size={20} />
                  <span className="text-md ml-2 mr-14">Products</span>
                </div>
              </li>
            </NavLink>

            <NavLink to="/reward">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <GiftIcon size={20} />
                  <span className="text-md ml-2">Rewards</span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
