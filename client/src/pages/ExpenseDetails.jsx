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
                        <div className="col-md-5 shadow-lg rounded-4" style={{ minHeight: 400, minWidth: 530 }}>
                            <div className="heading text-center rounded-4 py-1 mt-2 text-light" style={{ backgroundColor: "#304D6D" }}>
                                <h1>Description</h1>
                            </div>
                            <div className="desc rounded-4 my-2 py-2 px-4" style={{ backgroundColor: "#B3C8E4", minHeight: 310 }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias, magni illo doloremque placeat aliquid nobis porro asperiores voluptatibus repellendus numquam culpa?</p>
                            </div>
                        </div>
                        <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg2})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, minWidth: 530 }}>
                            <h1 className="text-light">Contribution in Total Budget</h1>
                            <PortionInTotalPie />
                        </div>
                    </div>
                    {role === 'manager' ?
                        <div className="verifyexpense mt-4 d-flex justify-content-between">
                            <div className="item-1">
                                <button className="btn btn-success me-2">Accept</button>
                                <button className="btn btn-danger">Reject</button>
                            </div>
                            <div className="item-2 me-4">
                                <button className="btn btn-primary">View Bill</button>
                            </div>
                        </div>
                        :
                        <div className="d-flex justify-content-between mt-4">
                            <div className="item-1">
                                <h4 >Status: Pending</h4>
                            </div>
                            <div className="item-2 me-4">
                                <button className="btn btn-primary">View Bill</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
