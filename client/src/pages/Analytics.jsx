import mainbg from '../assets/project-dashboard/main-bg.jpg'
import { Hamburger4 } from '../components/Hamburger_4'
import { ExpByCategory } from '../components/ExpByCategory'
import { EmpDistributionPie } from '../components/EmpDistributionPie'
import { ExpenseTable } from '../components/ExpenseTable'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { getManagerAnalytics, getEmployeeAnalytics, reset } from '../features/statistic/statisticSlice'
import '../styles/Analytics.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PrintIcon from '@mui/icons-material/Print';

const buttonStyle = {
    backgroundColor: '#3F76BF', 
    fontSize: "3vh",
    transition: 'background-color 0.1s, transform 0.4s',
};

const hoverStyle = {
    backgroundColor: 'black',
    transform: 'scale(1.07)',
};

export const Analytics = () => {

    const pdfRef = useRef();
    const [hover, setHover] = useState(false);

    const downloadPDF = () => {

        toast.info("Generating Report... Please Wait!")

        const element = document.getElementById("report");
        const width = element.scrollWidth;
        const height = element.scrollHeight;

        const pdfMargin = 80;

        html2canvas(element, { scrollY: height, scrollX: width }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'px', [width + (pdfMargin * 2), height + (pdfMargin * 2)]);

            const date = new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
            });

            const text = `${project?.name} Report (${new Date(project?.createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })} - ${date})`

            pdf.setFontSize(50);
            const textWidth = pdf.getStringUnitWidth(text) * 50;
            const textXPos = (pdf.internal.pageSize.getWidth() / 2) - (textWidth / 2) + pdfMargin + 10;
    
            pdf.text(text, textXPos, pdfMargin - 20);
            
            const imgProps = pdf.getImageProperties(imgData);

            let pdfWidth = pdf.internal.pageSize.getWidth() - (pdfMargin * 2);
            let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            let remainingHeight = height;
            let yPos = pdfMargin;

            while (remainingHeight > 0) {
                const pageHeight = pdfHeight > remainingHeight ? remainingHeight : pdfHeight;
                pdf.addImage(imgData, 'PNG', pdfMargin, yPos, pdfWidth, pageHeight);
                remainingHeight -= pageHeight;
                yPos -= pdfHeight;
            }

            const table = document.getElementById("expense-history-table");
            const tableWidth = table.scrollWidth;
            const tableHeight = table.scrollHeight;

            html2canvas(table, { scrollY: tableHeight, scrollX: tableWidth }).then(tableCanvas => {
                const tableImgData = tableCanvas.toDataURL('image/png');
                const tableImgProps = pdf.getImageProperties(tableImgData);

                let tablePdfWidth = pdf.internal.pageSize.getWidth() - (pdfMargin * 2);
                let tablePdfHeight = (tableImgProps.height * tablePdfWidth) / tableImgProps.width;

                pdf.addPage();
                pdf.setFontSize(50);
                pdf.text("All Expenses", pdfMargin - 3, pdfMargin - 20);

                pdf.addImage(tableImgData, 'PNG', pdfMargin, pdfMargin, tablePdfWidth, tablePdfHeight);
                pdf.save(`${project?.name} Report.pdf`);

                toast.dismiss();
                toast.success("Report Generated Successfully!")
            });
        });
    }

    const { projectId } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const { project, isLoading, isSuccess, isError, appErr, serverErr } = useSelector(state => state.statistic)

    useEffect(() => {
        if (user?.role == 'manager') {
            dispatch(getManagerAnalytics(projectId))
        }

        else if (user?.role == 'employee') 
        {
            dispatch(getEmployeeAnalytics(projectId))
        }

    }, [dispatch, projectId, user?.role])

    useEffect(() => {

        if (isSuccess)
        {
            dispatch(reset());
        }

        if (isError)
        {
            toast.error(appErr || serverErr);
            dispatch(reset());
        }

    }, [dispatch, isSuccess, isError, appErr, serverErr])

    if (isLoading) {
        return (
            <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundSize:'cover', backgroundPosition:'center' }}>
            <div className="row">
                <div className="col-3">
                    <Hamburger4 />
                </div>
                <div className="col-9">
                    <div className="display-5 shadow-lg rounded p-3 fw-semibold text-light" style={{ backgroundColor: "#304D6D" }}>
                    <Skeleton variant="rounded" animation="wave" width="100%" height="10vh" />
                    </div>
                    <div className=' mt-3 display-6 p-2' style={{fontSize: "3vh"}}> 
                    <Skeleton variant="rounded" animation="wave" width="100%" height="5vh" />
                    <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="100%" height="5vh" />
                    </div>
                    <div className="team p-2">
                        <div className=''>
                            <div className='display-6 fw-normal'>Manager</div>
                            
                        <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="100%" height="8vh" />

                        </div>
                        <div className='mt-3 display-6 fw-normal'>Employees</div>
                        <div className="overflow-auto scroll" style={{ maxHeight: "350px" }}>
                        <Skeleton sx={{marginTop: 2}} variant="rounded" animation="wave" width="100%" height="8vh" />
                        <Skeleton sx={{marginTop: 0.4}} variant="rounded" animation="wave" width="100%" height="8vh" />
                        <Skeleton sx={{marginTop: 0.4}} variant="rounded" animation="wave" width="100%" height="8vh" />
                        <Skeleton sx={{marginTop: 0.4}} variant="rounded" animation="wave" width="100%" height="8vh" />
                        </div>
                    </div>
                    <div className='mt-4 shadow-lg rounded p-2' style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                        <h3 className='display-6 fw-normal p-2'>Expense Based on Category</h3>
                        <div className='d-flex justify-content-center mt-5 mb-5'>
                        <Skeleton variant="circular" animation="wave" width={600} height={600} />   
                        </div>   
                    </div>
                    {user.role == "manager" && <div className='mt-4 shadow-lg rounded p-2' style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                        <h3 className='p-2 display-6 fw-normal'>Expense Based on Employee Use</h3>
                        <div className='d-flex justify-content-center mt-5 mb-5'>
                        <Skeleton variant="circular" animation="wave" width={600} height={600} />   
                        </div>
                        </div>}
                    <div className='mt-4 shadow-lg rounded p-2 mb-4' style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                        <h3 className='mb-3 p-2 display-6 fw-normal'>All Expenses </h3>
                        <div className="expense-table ms-5 mb-4">
                        <Skeleton variant="rounded" animation="wave" width="100%" height="60vh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
      <div
        className="px-3 py-3"
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="row">
          <div className="col-3">
            <Hamburger4 />
            <div className="d-flex justify-content-center mt-5 mb-5">
              <button
                className="btn text-white"
                style={hover ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
                onClick={downloadPDF}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <PrintIcon sx={{fontSize: 30}} /> Generate Report
              </button>
            </div>
          </div>
          <div className="col-9">
            <div ref={pdfRef} id="report">
              <div
                className="display-5 shadow-lg rounded p-3 fw-semibold text-light"
                style={{ backgroundColor: "#304D6D" }}
              >
                {project?.name}
              </div>
              <div
                className=" mt-3 display-6 p-2"
                style={{ fontSize: "3vh", fontWeight: 450 }}
              >
                Description : {project?.description}
              </div>
              <div className="team p-2">
                <div className="">
                  <div className="display-6 fw-normal">Manager</div>
                  <ol className="list-group mt-3 list-group-numbered">
                    {project?.manager_id && (
                      <li className="list-group-item d-flex justify-content-between align-items-start striped-hover-item">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            {project?.manager_id?.firstName +
                              " " +
                              project?.manager_id?.lastName}
                          </div>
                          {project?.manager_id?.email}
                        </div>
                        <span className="badge mt-3 bg-success rounded-pill">
                          Manager
                        </span>
                      </li>
                    )}
                  </ol>
                </div>
                <div className="mt-3 display-6 fw-normal">Employees</div>
                <div
                  className="overflow-auto scroll"
                  style={{ maxHeight: "350px" }}
                >
                  <ol className="list-group mt-3 list-group-numbered">
                    {project?.employees?.map((employee, index) => {
                      return (
                        <li
                          key={index}
                          className={`list-group-item d-flex justify-content-between align-items-start striped-hover-item`}
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">
                              {employee?.firstName + " " + employee?.lastName}
                            </div>
                            {employee?.email}
                          </div>
                          <span className="badge mt-3 bg-primary rounded-pill">
                            Employee
                          </span>
                        </li>
                      );
                    })}
                  </ol>

                  {project?.employees?.length == 0 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="display-6 mt-3"
                        style={{ fontSize: "4vh", fontWeight: 400 }}
                      >
                        No employees have been added to the project.
                      </div>
                      <Link
                        to={`/projects/${projectId}/invite-employee`}
                        className="text-decoration-none"
                      >
                        <button
                          className="card-title px-3 mt-2 text-white btn font-weight-bold"
                          style={{
                            fontSize: "3vh",
                            backgroundColor: "#304D6D",
                          }}
                        >
                          <PersonAddIcon sx={{ fontSize: 30 }} /> Invite
                          Employees
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="mt-4 shadow-lg rounded p-2"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
              >
                <h3 className="display-6 fw-normal p-2">
                  Expense Based on Category
                </h3>
                <ExpByCategory />
              </div>
              {user?.role == "manager" && (
                <div
                  className="mt-4 shadow-lg rounded p-2"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <h3 className="p-2 display-6 fw-normal">
                    Expense Based on Employee Use
                  </h3>
                  <EmpDistributionPie
                    size={800}
                    labelcolor={"#000"}
                    justifycontent="justify-content-center"
                  />
                </div>
              )}
            </div>
            <div
              className="mt-4 shadow-lg rounded p-2 mb-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
            >
              <h3 className="mb-3 p-2 display-6 fw-normal">All Expenses </h3>
              <div className="expense-table ms-5 mb-4">
                <ExpenseTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}