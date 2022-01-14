import { PersonIcon } from '@primer/octicons-react'
import Admin from '../../UI/organisms/Profile'

const Profile = () => {
  document.title = 'Profile'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <PersonIcon size={16} fill="darkgrey" />
        <span className="text-lg text-darkgrey font-bold">/ Profile</span>
      </div>

      <div
        className="mx-auto"
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
          display: 'inline',
        }}
      >
        <div className="mx-auto">
          <Admin />
        </div>
      </div>
    </>
  )
}

export default Profile
