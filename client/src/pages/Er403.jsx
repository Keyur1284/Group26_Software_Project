import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import er from '../assets/error-images/ERROR403.svg'

export const Er403 = () => {
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
                       <div style={
                        {
                          color: "white",
                          fontSize: "300px",
                          fontWeight: "400",
                          wordWrap: "break-word",
                          marginBottom: "10px" 
                        }
                       }>403</div> 
                       <div style={
                        {
                          marginTop: "0px",
                          color: "white",
                          fontSize: "60px",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }
                       }>FORBIDDEN</div>
                        
                   </div>

                   <div className="d-flex col-6" style={
                    {
                      width: "50%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    }
                   }>

                            
                        <img src={er} style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="man"></img>


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
                    width: "1300px",
                    backgroundColor: "#EEF8FF",
                    height: "40%"
                  }
                }>
                    <div className='text-center d-flex justify-content-evenly align-items-center' style={
                      {
                        marginTop: "25px",
                        color: "#0085FF",
                        fontSize: "30px",
                        fontWeight: "400px",
                        wordWrap: "break-word"
                      }
                    }>
                        <div>
                        YOU DON'T HAVE PERMISSION TO ACCESS ON THIS SERVER
                      </div>
                      <div> 
                      <Link to='/' style={{textDecoration: "none"}}> GO BACK TO {"  "}
                    <HomeIcon sx={{ fontSize: 40, marginBottom: "1vh" }} /> </Link>
                    </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}
