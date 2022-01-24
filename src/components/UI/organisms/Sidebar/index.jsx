import { Link, NavLink, useLocation } from 'react-router-dom'

import {
  PersonIcon,
  TagIcon,
  GiftIcon,
  HomeIcon,
  ChecklistIcon,
} from '@primer/octicons-react'

import logoWhite from '../../../../assets/logo-white.svg'
import { useEffect, useState } from 'react'

const nav = {
  dashboard: false,
  agent: false,
  product: false,
  reward: false,
  transaction: false,
}

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState(nav)

  let location = useLocation()

  useEffect(() => {
    const pathname = location.pathname
    const name = pathname.slice(1)
    setActiveNav({ ...nav, [name]: true })
  }, [location])

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 h-full bg-purple shadow flex-col justify-between sm:flex font-roboto">
        <div className="pl-5 pr-5">
          <Link to="/">
            <div className="h-16 w-full pl-2 flex items-center">
              <img alt="logo white" src={logoWhite} width={175} />
            </div>
          </Link>

          <nav>
            <ul className="mt-5">
              <li
                className={
                  activeNav.dashboard ? 'rounded-md bg-darkpurple' : null
                }
              >
                <NavLink to="/dashboard">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <HomeIcon size={20} />
                      <span className="text-md ml-2">Dashboard</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                className={activeNav.agent ? 'rounded-md bg-darkpurple' : null}
              >
                <NavLink to="/agent">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <PersonIcon size={20} />
                      <span className="text-md  ml-2">Agents</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                className={
                  activeNav.product ? 'rounded-md bg-darkpurple' : null
                }
              >
                <NavLink to="/product">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <TagIcon size={20} />
                      <span className="text-md ml-2 mr-14">Products</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                className={activeNav.reward ? 'rounded-md bg-darkpurple' : null}
              >
                <NavLink to="/reward">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <GiftIcon size={20} />
                      <span className="text-md ml-2">Rewards</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                className={
                  activeNav.transaction ? 'rounded-md bg-darkpurple' : null
                }
              >
                <NavLink to="/transaction">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <ChecklistIcon size={20} />
                      <span className="text-md ml-2">Transactions</span>
                    </div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar
