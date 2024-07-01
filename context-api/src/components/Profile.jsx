import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className=' text-lg my-6'>Please Login!</div>
  }
  return <div className=' text-lg my-6'>Welcome {user}</div>

}

export default Profile