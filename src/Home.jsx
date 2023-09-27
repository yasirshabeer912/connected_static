import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './App.css';
import { useState } from "react";
const Home = () => {
  const [open, setOpen] = useState(false);

  console.log(open);
  return (
    <>
    <div className="mainApp">
        <div className={open ? 'sidebar show' :'sidebar'}><Sidebar setOpen={setOpen} /></div>
        <div className="mainContent">
            <Header setOpen={setOpen}/>
          <div className="postContent">
            <div className="row PostContainer">
              <div className="col-md-4">
                <div className="card py-3 px-2">
                  <div className="card-header">
                    <div className="user-profile  d-flex justify-content-between">
                      <div className="user d-flex justify-content-center align-items-center">
                        <div className="user-image"><img src="/images/avatar.png" className="w-75" alt="" /></div>
                        <div className="h6 pt-2 fw-bold">Safdar Azeem</div>
                      </div>
                      <div className="threeDots"><MoreVertIcon/></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="postContent">
                        <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad corporis a voluptate possimus</div>
                    </div>
                    <div className="postImage mt-3">
                      <img src="/images/post1.png" className="img-fluid" alt="" />
                    </div>
                    <div className="postReactions d-flex justify-content-between text-center mx-auto mt-2">
                        <div className="likeComments d-flex align-items-center">
                          <div className="heartR d-flex align-items-center ">
                        <FavoriteIcon  style={{color:"red"}}/>
                          <div className="p px-1">9</div>
                          </div>
                          <div className="firstIcon d-flex">
                          <ChatIcon className="chatICON"/>
                          <div className="p px-1">12</div>
                          </div>
                          
                        </div>
                        <div className="favorite">
                          <BookmarkBorderIcon />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card py-3 px-2">
                  <div className="card-header">
                    <div className="user-profile  d-flex justify-content-between">
                      <div className="user d-flex justify-content-center align-items-center">
                        <div className="user-image"><img src="/images/avatar.png" className="w-75" alt="" /></div>
                        <div className="h6 pt-2 fw-bold">Safdar Azeem</div>
                      </div>
                      <div className="threeDots"><MoreVertIcon/></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="postContent">
                        <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad corporis a voluptate possimus</div>
                    </div>
                    <div className="postImage mt-3">
                      <img src="/images/post2.png" className="img-fluid" alt="" />
                    </div>
                    <div className="postReactions d-flex justify-content-between text-center mx-auto mt-2">
                        <div className="likeComments d-flex align-items-center">
                          <div className="heartR d-flex align-items-center ">
                        <FavoriteIcon  style={{color:"red"}}/>
                          <div className="p px-1">9</div>
                          </div>
                          <div className="firstIcon d-flex">
                          <ChatIcon className="chatICON"/>
                          <div className="p px-1">12</div>
                          </div>
                          
                        </div>
                        <div className="favorite">
                          <BookmarkBorderIcon />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card py-3 px-2">
                  <div className="card-header">
                    <div className="user-profile  d-flex justify-content-between">
                      <div className="user d-flex justify-content-center align-items-center">
                        <div className="user-image"><img src="/images/avatar.png" className="w-75" alt="" /></div>
                        <div className="h6 pt-2 fw-bold">Safdar Azeem</div>
                      </div>
                      <div className="threeDots"><MoreVertIcon/></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="postContent">
                        <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad corporis a voluptate possimus</div>
                    </div>
                    <div className="postImage mt-3">
                      <img src="/images/post3.png" className="img-fluid" alt="" />
                    </div>
                    <div className="postReactions d-flex justify-content-between text-center mx-auto mt-2">
                        <div className="likeComments d-flex align-items-center">
                          <div className="heartR d-flex align-items-center ">
                        <FavoriteIcon  style={{color:"red"}}/>
                          <div className="p px-1">9</div>
                          </div>
                          <div className="firstIcon d-flex">
                          <ChatIcon className="chatICON"/>
                          <div className="p px-1">12</div>
                          </div>
                          
                        </div>
                        <div className="favorite">
                          <BookmarkBorderIcon />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card py-3 px-2">
                  <div className="card-header">
                    <div className="user-profile  d-flex justify-content-between">
                      <div className="user d-flex justify-content-center align-items-center">
                        <div className="user-image"><img src="/images/avatar.png" className="w-75" alt="" /></div>
                        <div className="h6 pt-2 fw-bold">Safdar Azeem</div>
                      </div>
                      <div className="threeDots"><MoreVertIcon/></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="postContent">
                        <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad corporis a voluptate possimus</div>
                    </div>
                    <div className="postImage mt-3">
                      <img src="/images/post4.png" className="img-fluid" alt="" />
                    </div>
                    <div className="postReactions d-flex justify-content-between text-center mx-auto mt-2">
                        <div className="likeComments d-flex align-items-center">
                          <div className="heartR d-flex align-items-center ">
                        <FavoriteIcon  style={{color:"red"}}/>
                          <div className="p px-1">9</div>
                          </div>
                          <div className="firstIcon d-flex">
                          <ChatIcon className="chatICON"/>
                          <div className="p px-1">12</div>
                          </div>
                          
                        </div>
                        <div className="favorite">
                          <BookmarkBorderIcon />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card py-3 px-2">
                  <div className="card-header">
                    <div className="user-profile  d-flex justify-content-between">
                      <div className="user d-flex justify-content-center align-items-center">
                        <div className="user-image"><img src="/images/avatar.png" className="w-75" alt="" /></div>
                        <div className="h6 pt-2 fw-bold">Safdar Azeem</div>
                      </div>
                      <div className="threeDots"><MoreVertIcon/></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="postContent">
                        <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad corporis a voluptate possimus</div>
                    </div>
                    <div className="postImage mt-3">
                      <img src="/images/post5.png" className="img-fluid" alt="" />
                    </div>
                    <div className="postReactions d-flex justify-content-between text-center mx-auto mt-2">
                        <div className="likeComments d-flex align-items-center">
                          <div className="heartR d-flex align-items-center ">
                        <FavoriteIcon  style={{color:"red"}}/>
                          <div className="p px-1">9</div>
                          </div>
                          <div className="firstIcon d-flex">
                          <ChatIcon className="chatICON"/>
                          <div className="p px-1">12</div>
                          </div>
                          
                        </div>
                        <div className="favorite">
                          <BookmarkBorderIcon />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card py-3 px-2">
                  <div className="card-header">
                    <div className="user-profile  d-flex justify-content-between">
                      <div className="user d-flex justify-content-center align-items-center">
                        <div className="user-image"><img src="/images/avatar.png" className="w-75" alt="" /></div>
                        <div className="h6 pt-2 fw-bold">Safdar Azeem</div>
                      </div>
                      <div className="threeDots"><MoreVertIcon/></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="postContent">
                        <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad corporis a voluptate possimus</div>
                    </div>
                    <div className="postImage mt-3">
                      <img src="/images/post6.png" className="img-fluid" alt="" />
                    </div>
                    <div className="postReactions d-flex justify-content-between text-center mx-auto mt-2">
                        <div className="likeComments d-flex align-items-center">
                          <div className="heartR d-flex align-items-center ">
                        <FavoriteIcon  style={{color:"red"}}/>
                          <div className="p px-1">9</div>
                          </div>
                          <div className="firstIcon d-flex">
                          <ChatIcon className="chatICON"/>
                          <div className="p px-1">12</div>
                          </div>
                          
                        </div>
                        <div className="favorite">
                          <BookmarkBorderIcon />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Home