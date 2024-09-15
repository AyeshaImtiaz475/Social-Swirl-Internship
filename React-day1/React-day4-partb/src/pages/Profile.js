import React, {useContext} from 'react'
import { ChangeProfile } from '../components/ChangeProfile'
import { AppContext } from '../App';

export const Profile = (props) => {
  const {username} = useContext(AppContext);
  return (
    <div>
        This is the profile page and the user is:{username} 
        <ChangeProfile />
    </div>
  )
}
