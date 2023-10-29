import v1 from '../assets/error-images/Vector1.svg';
import v2 from '../assets/error-images/Vector2.svg';
import man from '../assets/error-images/myAvatar.svg';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

export const Er401 = () => {
    return (
        
        <div className="" style={{height: "100vh"}}>
            <div className="top" style={
                {backgroundColor: "#0085FF",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                height: "75%"}
            }>
              <div className="lb d-flex justify-content-center" style={
                {
                  backgroundColor: "#00A3FF",
                  width: "70vw",
                  height: "85%",
                  display: "flex"
                
                }
              }>
                   <div className="d-flex col-6 p-5 flex-column text-center" style={{marginTop: "-5vh"}}>     
                       <div className='display-1' style={
                        {
                          color: "white",
                          fontSize: "250px",
                          fontWeight: "400",
                          wordWrap: "break-word",
                          marginBottom: "10px" 
                        }
                       }>401</div> 
                       <div style={
                        {
                          marginTop: "0px",
                          color: "white",
                          fontSize: "50px",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }
                       }>UNAUTHORIZED</div>
                        
                   </div>

                   <div className="d-flex col-6" style={
                    {
                      width: "50%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    //   justifyContent: "center"
                    }
                   }>
                        <div>
                          <img src={v1} className='h-100' alt="left"></img>
                          <img src={v2} className='h-100' alt="right"></img>
                        </div>

                        <div style={
                          {
                            width: "380px",
                            height: "85%",
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                            position: "relative",
                            backgroundColor: "#94DFFF"
                          }
                        }>
                             <div style={
                              {
                                position: "absolute",
                                top: "85px",
                                bottom: "50px",
                                left: "38px",
                                right: "38px",
                                backgroundColor: "#69D2FF",
                                borderRadius: "20px",
                                border: "5px solid white",
                              }
                             }>
                              <img src={man} style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="man"></img>

                             </div>
                        </div>

                   </div>

               </div>              
            </div>

            <div className='bottom' style={
              {
                width: "100%",
                height: "25%",
                display: "flex",
                justifyContent: "flex-begin",
                alignItems: "center",
                flexDirection: "column"
              }
            }>

                <div className='gray' style={
                  {
                    width: "100%",
                    backgroundColor: "#EEF8FF",
                    height: "70%"
                  }
                }>
                    <div className='text-center d-flex flex-column align-items-center' style={
                      {
                        marginTop: "25px",
                        color: "#0085FF",
                        fontSize: "30px",
                        fontWeight: "400px",
                        wordWrap: "break-word"
                      }
                    }>
                        <div>
                      ACCESS IS ALLOWED ONLY FOR REGISTERED USERS
                      </div>
                      <div className='d-flex w-75 mt-2 justify-content-evenly'>
                        <div> 
                          <Link to='/' style={{textDecoration: "none"}}> GO BACK TO {"  "}
                          <HomeIcon sx={{ fontSize: 40, marginBottom: "1vh" }} /> </Link>
                        </div> 
                        <div> 
                          <Link to='/login' style={{textDecoration: "none"}}> LOGIN {"  "}
                          <LoginIcon sx={{ fontSize: 40, marginBottom: "1vh" }} />
                           </Link>
                        </div>
                      </div>
                       
                    </div>
                </div>
            </div>


        </div>
   
  );
}
