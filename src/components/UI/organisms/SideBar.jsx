import { useState } from 'react'
import {
  HourglassIcon,
  TagIcon,
  GiftIcon,
  HomeIcon,
  ChevronDownIcon,
  PersonIcon,
} from '@primer/octicons-react'
import Logo from '../atoms/logo-white.svg'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const [reward, setReward] = useState(false)

  return (
    <>
      <div className="absolute h-full bg-[#5F2788] shadow flex-col justify-between sm:flex">
        <div className="pl-5 pr-5">
          <Link to="/dashboard">
            <div className="h-16 w-full pl-2 flex items-center">
              <img alt="logo white" src={Logo} width={175} />
            </div>
          </Link>

          <ul className="mt-5">
            <li className="flex w-full justify-between text-white hover:bg-[#391553] rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
              <Link to="/dashboard">
                <div className="flex items-center">
                  <HomeIcon size={20} />

                  <span className="text-md ml-2">Dashboard</span>
                </div>
              </Link>
            </li>

            <li className="flex w-full justify-between text-white hover:bg-[#391553] rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
              <Link to="/agents">
                <div className="flex items-center">
                  <PersonIcon size={20} />

                  <span className="text-md  ml-2">Agents</span>
                </div>
              </Link>
            </li>

            <li className="flex w-full justify-between text-white hover:bg-[#391553] rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
              <Link to="/product">
                <div className="flex items-center">
                  <TagIcon size={20} />

                  <span className="text-md  ml-2">Product</span>
                </div>
              </Link>
            </li>

            <li
              onClick={() => setReward(!reward)}
              className="flex w-full justify-between text-white hover:bg-[#391553] rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2"
            >
              <div className="flex items-center">
                <GiftIcon size={20} />

                <span className="text-md ml-2 mr-14">Rewards</span>

                <ChevronDownIcon
                  size={20}
                  class="group-hover:-rotate-18 transition duration-150 ease-in-out"
                />
              </div>
            </li>

            {reward ? (
              <div>
                {' '}
                <ul>
                  <li className="flex w-full justify-between text-white hover:bg-[#391553] rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <span className="text-md  ml-7">Bank Transfer</span>
                    </div>
                  </li>

                  <li className="flex w-full justify-between text-white hover:bg-[#391553] rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <span className="text-md  ml-7">E - Wallet</span>
                    </div>
                  </li>

                  <li className="flex w-full justify-between text-white hover:bg-[#391553] rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <span className="text-md ml-7">Pulsa / Paket Data</span>
                    </div>
                  </li>
                </ul>{' '}
              </div>
            ) : null}

            <li className="flex w-full justify-between text-white hover:bg-[#391553] rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
              <Link to="/history">
                <div className="flex items-center">
                  <HourglassIcon size={20} />

                  <span className="text-md ml-2">History</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar
