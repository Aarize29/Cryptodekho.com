import React,{useState, useEffect} from 'react'
import './Profile.css'
import Popup from './Popup'
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase'
import { onAuthStateChanged } from "firebase/auth";
const Profile = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [userUpdate,setUserUpdate]=useState({
        userName:"Name",
        userPhone:"**********",
        userEmail:auth.currentUser.email,
        userPassword:"******",
        userTitle:"Web Developer"
    })
    const [userInfo,setUserInfo]=useState({
        userName:"Name",
        userPhone:"**********",
        userEmail:auth.currentUser.email,
        userPassword:'******',
        userTitle:"Web Developer"
    })
  //  const [selectedImage,setSelectedImage]=useState("")
    const saveChange=(e)=>{
        e.preventDefault();
        setButtonPopup(false);
        setUserInfo(userUpdate)
        setTimeout(() => {
            alert("Your Profile is Updated")
        }, 300);
    }

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserUpdate({...userUpdate,[name]:value})
    }
    
    const navigate = useNavigate()
     

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
              navigate('/')
              //  alert('You need to login first')
              
            }
        })
    }, [])


    //  const fileSelectedHandler=(e)=>{
    //      if (e.target.files && e.target.files.length > 0) {
    //          setSelectedImage(e.target.files[0]);
    //        }
    //   }
   //  console.log(selectedImage)
    const edit=()=>{
        setButtonPopup(true);
    }
  return (
    <>
     <section className="vh-100" style={{backgroundColor: "#f4f5f"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{borderRadius: ".5rem"}}>
          <div className="row g-0">

          

            <div className="col-md-4 gradient-custom text-center text-white"
              style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
              <img src="https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg" alt="profile" className='profileImage img-fluid my-5' style={{width: "50%",boxShadow:"5px 5px 20px lightGrey",border:"2px solid black",borderRadius:"10px"}}/> 
               <h1>{userInfo.userName}</h1>
               <p>{userInfo.userTitle}</p>
                
              <i className="far fa-edit mb-5"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
               <div className='d-flex justify-content-between align-item-center'>
                <h6 >Information</h6>
                <span className="material-symbols-outlined" onClick={edit}>edit</span>
                </div>
                <hr className="mt-0 mb-4"/>
                  <div className="row pt-1">
                  <div className="col-8 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{userInfo.userEmail}</p>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">{userInfo.userPhone}</p>
                  </div>
                  <div>
                    <h6>Password</h6>
                    <p className='text-muted'>{userInfo.userPassword}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup} saveChange={saveChange}>
    <div className="updateSection">
        <form action="" onSubmit={saveChange}>
      <div className='updateInfo'>
      <label htmlFor='userName'>Name</label>
       <input type="text"  autoComplete='off'  id="userName" name='userName' className='text-muted' value={userUpdate.userName}   onChange={handleChange}/>
       <label htmlFor='userPhone'>Phone</label>
       <input type="text" autoComplete='off' id='userPhone' name='userPhone' className='text-muted' value={userUpdate.userPhone}  onChange={handleChange}/>
       <label htmlFor='userEmail'>Email</label>
       <input type="text" autoComplete='off' id='userEmail' name='userEmail' className='text-muted' value={userUpdate.userEmail}  onChange={handleChange}/>
       <label htmlFor='userPassword'>Password</label>
       <input type="text" autoComplete='off' id='userPassword' name='userPassword' className='text-muted'  value={userUpdate.userPassword}  onChange={handleChange}/>
       <label htmlFor='userTitle'>Title</label>
       <input type="text" autoComplete='off' id='userTitle' name='userTitle' className='text-muted' value={userUpdate.userTitle}  onChange={handleChange}/>
      </div>
      {/* <div className="updateImage">
      <label htmlFor="imgchanged" className='uploadbtn'><span className="material-symbols-outlined" >edit</span></label>
       {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="profile" className='profileImage' style={{width: "100%", boxShadow:"5px 5px 20px lightGrey",border:"2px solid black",borderRadius:"10px"}}/> }
        <input type="file" accept='image/*'  id="imgchanged" style={{display:"none"}} onChange={fileSelectedHandler}/>
      </div>  */}
        </form>
      </div>
</Popup>
    </>
  )
}

export default Profile
