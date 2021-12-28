import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  PersonIcon,
  HourglassIcon,
  TagIcon,
  GiftIcon,
  HomeIcon,
  ChevronDownIcon,
} from '@primer/octicons-react'

import logo from '../atoms/logo-white.svg'

const Sidebar = () => {
  const [reward, setReward] = useState(false)

  return (
    <>
      <div className="absolute h-full bg-purple shadow flex-col justify-between sm:flex font-Roboto">
        <div className="pl-5 pr-5">
          <div className="h-16 w-full pl-2 flex items-center">
            <img alt="logo white" src={logo} width={175} />
          </div>

          <ul className="mt-5">
            <NavLink to="/dashboard">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <HomeIcon size={20} />

                  <span className="text-md ml-2">Dashboard</span>
                </div>
              </li>
            </NavLink>

            <NavLink to="/agents">
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

                  <span className="text-md  ml-2">Product</span>
                </div>
              </li>
            </NavLink>

            <li
              onClick={() => setReward(!reward)}
              className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2"
            >
              <div className="flex items-center">
                <GiftIcon size={20} />

                <span className="text-md ml-2 mr-14">Reward</span>

                <ChevronDownIcon size={20} />
              </div>
            </li>

            {reward ? (
              <div>
                {' '}
                <ul>
                  <NavLink to="/reward">
                    <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-md  ml-7">Bank Transfer</span>
                      </div>
                    </li>
                  </NavLink>

                  <NavLink to="/reward">
                    <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-md  ml-7">E - Wallet</span>
                      </div>
                    </li>
                  </NavLink>

                  <NavLink to="/reward">
                    <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-md ml-7">Pulsa / Paket Data</span>
                      </div>
                    </li>
                  </NavLink>
                </ul>{' '}
              </div>
            ) : null}

            <NavLink to="/history">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <HourglassIcon size={20} />

                  <span className="text-md ml-2">History</span>
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
