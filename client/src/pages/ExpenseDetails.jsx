import { Hamburger4 } from "../components/Hamburger_4"
import mainbg from '../assets/project-dashboard/main-bg.jpg'
import { PortionInTotalPie } from "../components/PortionInTotalPie"
import bg1 from '../assets/expense-details/bg1.jpg'
import bg2 from '../assets/project-dashboard/bg-2.jpg'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const role = 'manager';
const status = 'rejected'

let statusClassName;
let statusText;

if (status === "rejected") {
    statusClassName = "bg-danger";
    statusText = "Rejected";
} else if (status === "accepted") {
    statusClassName = "bg-success";
    statusText = "Accepted";
} else if (status === "pending") {
    statusClassName = "bg-warning";
    statusText = "Pending";
}

export const ExpenseDetails = () => {
    return (
        <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat" }}>
            <div className="row">
                <div className="col-3">
                    <Hamburger4 />
                </div>
                <div className="col-9">
                    <div className="row me-2">
                        <div className="display-3 fw-semibold">Expense Details</div>
                        <div className="col-12 my-3 py-3 rounded-4 d-flex flex-column align-items-start gap-3" style={{ backgroundColor: "#304D6D", backgroundImage: `url(${bg1})`, backgroundPosition: 'center', backgroundSize: 'cover', minHeight: 350 }}>
                            <div className="d-flex mt-4"><FlightTakeoffIcon style={{ color: "#fff", fontSize: 35 }} /> <h1 className="rounded ms-2 px-2" style={{ backgroundColor: '#fff' }}>Trip to Goa</h1></div>
                            <div className="d-flex"><CalendarMonthIcon style={{ color: "#fff", fontSize: 35 }} /> <h2 className="rounded ms-2 px-2" style={{ backgroundColor: '#fff' }}>14/09/23</h2></div>
                            <div className="d-flex"><LocationOnIcon style={{ color: "#fff", fontSize: 35 }} /> <h2 className="rounded ms-2 px-2" style={{ backgroundColor: '#fff' }}>Travelling</h2></div>
                            <div className="d-flex"><CurrencyRupeeIcon style={{ color: "#fff", fontSize: 35 }} /> <h2 className="rounded ms-2 px-2" style={{ backgroundColor: '#fff' }}>1200</h2></div>
                        </div>
                    </div>
                    <div className="row gap-5">
                        <div className="col-md-5 rounded-4" style={{ minWidth: 530 }}>
                            <div className="row shadow-lg rounded-4 px-2">
                                <div className="heading text-center rounded-4 py-1 mt-2 text-light" style={{ backgroundColor: "#304D6D" }}>
                                    <h1>Description</h1>
                                </div>
                                <div className="desc rounded-4 my-2 py-2 px-4" style={{ backgroundColor: "#B3C8E4", minHeight: 200 }}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias, magni illo doloremque placeat aliquid nobis porro asperiores voluptatibus repellendus numquam culpa?</p>
                                </div>
                            </div>
                            {role === 'manager' ?
                                <div className="text-center">
                                    <div className="btn btn-primary mt-4" style={{ width: '98%' }}>View Bill</div>
                                    <div className="btn btn-success m-2 mx-1" style={{ width: '48%' }}>Accept</div>
                                    <div className="btn btn-danger m-2 mx-1" style={{ width: '48%' }}>Reject</div>
                                </div>
                                :
                                <div className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <div className="btn btn-primary mt-3" style={{ width: '98%' }}>View Bill</div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="status mt-3" style={{ width: '98%' }}>
                                            <h6 className={`py-2 ${statusClassName} rounded text-light`}>Status: {statusText}</h6>
                                        </div>
                                    </div>
                                </div>
                            }


                        </div>
                        <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg2})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, minWidth: 530 }}>
                            <h1 className="text-light">Contribution in Total Budget</h1>
                            <PortionInTotalPie />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
