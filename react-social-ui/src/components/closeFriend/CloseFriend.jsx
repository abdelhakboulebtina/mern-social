import React from 'react'

const closeFriend = ({user}) => {
    const pf=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sideBarFriend">
            <img className="sidebarFriendImg" src={pf+user.profilePicture} alt=""/>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default closeFriend
