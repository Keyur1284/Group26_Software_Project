import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faClipboard, faCircleCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import HomeIcon from '@mui/icons-material/Home';
export const Hamburger4 = () => {
  return (
    
    <>
      <div className='d-flex flex-column'>
        <button className='btn btn-primary' style={{height: "7vh"}}> <HomeIcon />      Project Home </button>
        <button className='btn btn-primary mt-2' style={{height: "7vh"}}> <FontAwesomeIcon icon={faListCheck} />      My Projects </button>
        <button className='btn btn-primary mt-2' style={{height: "7vh"}}> <FontAwesomeIcon icon={faClipboard} />      Expenses    </button>
        <button className='btn btn-primary mt-2' style={{height: "7vh"}}> <FontAwesomeIcon icon={faCircleCheck} />      Analytics </button>
        <button className='btn btn-primary mt-2' style={{height: "7vh"}}> <FontAwesomeIcon icon={faUser} />    Profile </button>
      </div>
    </>
    
  )
}
