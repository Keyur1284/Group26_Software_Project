import '../css/ProjectDashboard.css'
import bg1 from '../assets/project-dashboard/bg-1.png'
import bg2 from '../assets/project-dashboard/bg-2.jpg'
import bg3 from '../assets/project-dashboard/bg-3.jpg'
import mainbg from '../assets/project-dashboard/main-bg.jpg'
import { MyExpPie } from '../components/MyExpPie'
import { TotalExpPie } from '../components/TotalExpPie'
import { Hamburger4 } from '../components/Hamburger_4'
import { EmpDistributionPie } from '../components/EmpDistributionPie'
import { useSelector } from 'react-redux'


export const ProjectDashboard = () => {

    const { user } = useSelector(state => state.auth);
    const role = user.role;

    return (
        <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat" }}>
            <div className="row">
                <div className="col-3">
                    <Hamburger4 />
                </div>
                <div className="col-9">
                    <div className="container"></div>
                    <div className="row me-3">
                        <div className="col-12 mb-3 py-3 text-white rounded-4" style={{ backgroundColor: "#304D6D" }}>
                            <h2 className='display-3 fw-semibold'>Project Name</h2>
                            <p>Project Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore maxime quisquam sapiente ratione nemo aliquid numquam tempore repellendus voluptatum!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row gap-4">
                            <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <h3 className='mx-3 my-3 fw-bold display-6 text-white'>Total Budget</h3>
                                <h6 className='mx-3 fw-semibold h2 text-light'>&#8377; 1000000</h6>
                                <div className="pie">
                                    <TotalExpPie />
                                </div>
                            </div>
                            <div className="col-md-5 py-2 shadow-lg rounded-4" style={{ backgroundColor: "#B3C8E4", minHeight: 400, width: 530 }}>
                                <h3 className="text-center py-2 rounded-3 text-white" style={{ backgroundColor: "#295CAA" }}>Employees</h3>
                                <div className="overflow-auto scroll custom-scroll-container" style={{ maxHeight: "350px", minHeight: "350px" }}>
                                    <ol className="list-group list-group-numbered">
                                        <li className="list-group-item">Employee 1</li>
                                        <li className="list-group-item">Employee 2</li>
                                        <li className="list-group-item">Employee 3</li>
                                        <li className="list-group-item">Employee 4</li>
                                        <li className="list-group-item">Employee 5</li>
                                        <li className="list-group-item">Employee 6</li>
                                        <li className="list-group-item">Employee 7</li>
                                        <li className="list-group-item">Employee 8</li>
                                        <li className="list-group-item">Employee 9</li>
                                        <li className="list-group-item">Employee 10</li>
                                        <li className="list-group-item">Employee 11</li>
                                        <li className="list-group-item">Employee 12</li>
                                        <li className="list-group-item">Employee 13</li>
                                        <li className="list-group-item">Employee 14</li>
                                        <li className="list-group-item">Employee 15</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="row my-4 gap-4">
                            { role === 'employee' ?
                                <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg2})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <h3 className='mx-3 my-3 fw-bold display-6 text-white' >My Expense</h3>
                                <h6 className='mx-3 fw-semibold h2 text-light'>&#8377; 200</h6>
                                <div className="pie">
                                    <MyExpPie/>
                                </div>
                            </div>
                            :
                            <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg2})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <h3 className='mx-3 my-3 fw-bold display-6 text-white' >Exployee Expense Distribuion</h3>
                                <div className="pie">
                                    <EmpDistributionPie/>
                                </div>
                            </div>
                            }
                            <div className="col-md-5 py-2 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg3})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <div className="container my-3">
                                    <div className="row justify-content-md-center">
                                        <div className="col-9 my-5 py-2 text-white rounded-5" style={{ backgroundColor: "#184FA3" }}>
                                            <h3 className='mx-3 my-1'>Approved Expenses</h3>
                                            <p className='mx-3 h3'>2</p>
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col-9 my-4 mb-5 py-2 rounded-5" style={{ backgroundColor: "#C7C7C7" }}>
                                            <h3 className='mx-3 my-1'>Pending Approval</h3>
                                            <p className='mx-3 h3'>2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}