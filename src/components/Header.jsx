import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/icons-material/Menu';
const Header = ({setOpen}) => {
  return (
    <>
    <div className="main-header pt-3 d-flex justify-content-between align-items-center fixed-top ">
        
        <div className="search d-none d-md-block">
            <input type="text" placeholder="search" />
        </div>
        <Menu
          className='menuICON d-md-none d-block'
          onClick={() => {
            setOpen(true);
            console.log("Open is set to true");
          }}
        />

        <div className="links">
            
            <a href=""><EmailIcon className='emailIcon'/></a>
            <a href=""><NotificationsIcon className='notificationsIcon'/></a>
            <div className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <AddIcon/>Add Post</div>
        </div>
    </div>

</>
  )
}

export default Header