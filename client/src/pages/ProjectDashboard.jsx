import '../styles/ProjectDashboard.css'
import bg1 from '../assets/project-dashboard/bg-1.png'
import bg2 from '../assets/project-dashboard/bg-2.jpg'
import bg3 from '../assets/project-dashboard/bg-3.jpg'
import mainbg from '../assets/project-dashboard/main-bg.jpg'
import Skeleton from '@mui/material/Skeleton';
import { MyExpPie } from '../components/MyExpPie'
import { TotalExpPie } from '../components/TotalExpPie'
import { Hamburger4 } from '../components/Hamburger_4'
import { EmpDistributionPie } from '../components/EmpDistributionPie'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getManagerDashboard, getEmployeeDashboard, reset } from '../features/statistic/statisticSlice'
import { useEffect } from 'react'


export const ProjectDashboard = () => {

    const { projectId } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { isSuccess, isError, isLoading, appErr, serverErr, project, approvedExpensesCount, pendingExpensesCount, employeeExpenses } = useSelector(state => state.statistic);

    useEffect(() => {

        if (user.role == 'manager')
            dispatch(getManagerDashboard(projectId));

        else if (user.role == 'employee')
            dispatch(getEmployeeDashboard(projectId));

    }, [dispatch, projectId, user.role])

    useEffect(() => {

        if (isSuccess || isError)
        {
            dispatch(reset());
        }

    }, [dispatch, isSuccess, isError])

    if (isLoading && !project) {

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
                        <Skeleton variant="rounded" animation="wave" width="100%" height="8vh" />
                        <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="80%" height="4vh" />
                        <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="80%" height="4vh" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="row gap-4">
                            <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <h3 className='mx-3 my-3 fw-bold display-6 text-white'>Total Budget</h3>
                                <Skeleton sx={{marginLeft: 2.5}} variant="rounded" animation="wave" width="50%" height="6vh" />
                                <div className="pie d-flex justify-content-end">
                                <div className='mt-5 me-5'>
                                    <Skeleton variant="circular" width={200} height={200} />
                                </div>
                                </div>
                            </div>
                            <div className="col-md-5 py-2 shadow-lg rounded-4" style={{ backgroundColor: "#B3C8E4", minHeight: 400, width: 530 }}>
                                <h3 className="text-center py-2 rounded-3 text-white" style={{ backgroundColor: "#295CAA" }}>Employees</h3>
                                <div className="overflow-auto scroll custom-scroll-container" style={{ maxHeight: "350px", minHeight: "350px" }}>
                                    <ol className="list-group list-group-numbered">
                                    <Skeleton sx={{marginTop: 1}} variant="rounded" animation="wave" width="100%" height="7vh" />
                                    <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="100%" height="7vh" />
                                    <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="100%" height="7vh" />
                                    <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="100%" height="7vh" />
                                    <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="100%" height="7vh" />
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="row my-4 gap-4">
                            { user?.role == 'employee' ?
                                <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg2})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <h3 className='mx-3 my-3 fw-bold display-6 text-white' >My Expense</h3>
                                <Skeleton sx={{marginLeft: 2}} variant="rounded" animation="wave" width="45%" height="6vh" />
                                <div className="pie d-flex justify-content-end">
                                <div className='mt-5 me-5'>
                                    <Skeleton variant="circular" width={200} height={200} />
                                </div>
                                </div>
                            </div>
                            :
                            <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg2})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <h3 className='mx-3 my-3 fw-bold display-6 text-white' >Exployee Expense Distribuion</h3>
                                <div className="pie d-flex justify-content-end">
                                <div className='mt-5 me-5'>
                                    <Skeleton variant="circular" width={200} height={200} />
                                </div>
                                </div>
                            </div>
                            }
                            <div className="col-md-5 py-2 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg3})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <div className="container my-3">
                                    <div className="row justify-content-md-center">
                                        <div className="col-9 my-5 py-2 text-white rounded-5" style={{ backgroundColor: "#184FA3" }}>
                                            <Skeleton sx={{padding: 5}} variant="rounded" animation="wave" width="100%" height="8vh" />
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col-9 my-4 mb-5 py-2 rounded-5" style={{ backgroundColor: "#C7C7C7" }}>
                                            <Skeleton sx={{padding: 5, borderRadius: 5}} variant="rounded" animation="wave" width="100%" height="8vh" />
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
                            <h2 className='display-4 fw-normal'>{project?.name}</h2>
                            <p className='mx-1'>{project?.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row gap-4">
                            <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <h3 className='mx-3 my-3 fw-bold display-6 text-white'>Total Budget</h3>
                                <h6 className='mx-3 fw-semibold h2 text-light'>&#8377; {project?.budget}</h6>
                                <div className="pie">
                                    <TotalExpPie />
                                </div>
                            </div>
                            <div className="col-md-5 py-2 shadow-lg rounded-4" style={{ backgroundColor: "#B3C8E4", minHeight: 400, width: 530 }}>
                                <h3 className="text-center py-2 rounded-3 text-white" style={{ backgroundColor: "#295CAA" }}>Employees</h3>
                                <div className="overflow-auto scroll custom-scroll-container" style={{ maxHeight: "350px", minHeight: "350px" }}>
                                    <ol className="list-group list-group-numbered">
                                        {project?.employees?.map((employee, index) => (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">{employee?.firstName + " " + employee?.lastName}</div>
                                                    {employee?.email}
                                                </div>
                                                <span className="badge bg-primary rounded-pill">Employee</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="row my-4 gap-4">
                            { user?.role == 'employee' ?
                                <div className="col-md-5 shadow-lg rounded-4" style={{ backgroundImage: `url(${bg2})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: 400, width: 530 }}>
                                <h3 className='mx-3 my-3 fw-bold display-6 text-white' >My Expense</h3>
                                <h6 className='mx-3 fw-semibold h2 text-light'>&#8377; {employeeExpenses}</h6>
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
                                            <p className='mx-3 h3'>{approvedExpensesCount}</p>
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col-9 my-4 mb-5 py-2 rounded-5" style={{ backgroundColor: "#C7C7C7" }}>
                                            <h3 className='mx-3 my-1'>Pending Approval</h3>
                                            <p className='mx-3 h3'>{pendingExpensesCount}</p>
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