import React from 'react';
import { useNavigate , useParams} from 'react-router-dom';

const Profile = () => {
    let navigate = useNavigate();
    let {username} = useParams();
  return (
    <h1>This is the profile  page for {username}!
        <button onClick={() => {
            navigate("/about")
        }}>Change to about page</button>
    </h1>
  )
}

export default Profile