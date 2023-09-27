import 'D:\\nodejs\\insta-clone\\src\\App.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import Close from '@mui/icons-material/Close'
const Sidebar = ({setOpen}) => {
  return (
    <div className="mainSidebar d-flex flex-column">
      <Close onClick={()=>setOpen(false)} className='closeIcon w-100 pl-5 d-md-none d-block' style={{float:'right'}}/>
        <div className="profile d-flex align-items-center">
          <div className="avatar">
            <img src="/images/avatar.png" alt="avatar" />
          </div>
          <div className="name"><div className="h6 ">Safdar Azeem</div></div>
        </div>
        <div className="followerlist d-flex justify-content-between align-items-center text-center mt-4">
          <div className="posts ">
            <div className="postNo">
              <div className="no">1</div>
            </div>
            <div className="p">Posts</div>
          </div>
          <div className="followers">
            <div className="postNo">
              <div className="no">1</div>
            </div>
            <div className="p">Followers</div>
          </div>
          <div className="followings">
            <div className="postNo">
              <div className="no">1</div>
            </div>
            <div className="p">Followings</div>
          </div>
        </div>
        <nav className="menu mt-5">
          <div className="nav-link active">
            <div className="icon"><DashboardIcon/></div>
            <div className="nav-name">Feed</div>
          </div>
          <div className="nav-link">
            <div className="icon"><SearchIcon/></div>
            <div className="nav-name">Explore</div>
          </div>
          <div className="nav-link">
            <div className="icon"><SettingsIcon/></div>
            <div className="nav-name">Settings</div>
          </div>

        </nav>

    </div>
  )
}

export default Sidebar