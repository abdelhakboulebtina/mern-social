import { Search,Person,Chat,Notifications } from '@material-ui/icons'
import './topbar.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext} from '../../context/authContext'
const Topbar = () => {
    const pf=process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    return (
        
        <div className="topbarContainer">
        <div className="topbarLeft">
           <Link to='/' style={{textDecoration:'none'}}> <span className="logo">Lamasocial</span></Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar"><Search className="searchIcon"/>
            <input className="searchInput" type="text" placeholder="Search for friend, post or video"/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbaIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbaIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbaIconBadge">1</span>
                </div>
            </div>
            <Link to={`/profile/${user.username}` }>
            <img className="topbarImg" alt="" src={user.profilePicture?pf+user.profilePicture:pf+'person/noAvatar.png'}/> 
            </Link>
        </div>
        </div>        
    )
}

export default Topbar
