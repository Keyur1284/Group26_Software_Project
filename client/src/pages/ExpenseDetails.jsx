import { Hamburger4 } from "../components/Hamburger_4";
import { useParams } from "react-router-dom";
import { getExpenseById, acceptExpense, rejectExpense, reset} from "../features/expense/expenseSlice";
import { getExpenseContribution } from "../features/statistic/statisticSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { PortionInTotalPie } from "../components/PortionInTotalPie";
import bg1 from "../assets/expense-details/bg1.jpg";
import bg2 from "../assets/project-dashboard/bg-2.jpg";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HotelIcon from "@mui/icons-material/Hotel";
import CampaignIcon from '@mui/icons-material/Campaign';
import LaptopIcon from '@mui/icons-material/Laptop';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import WineBarIcon from '@mui/icons-material/WineBar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Skeleton from "@mui/material/Skeleton";


export const ExpenseDetails = () => {
  const { expenseId } = useParams();
  const dispatch = useDispatch();
  const { expenseById, isSuccess, isError, isLoading, appErr, serverErr } = useSelector((state) => state.expense);
  const { totalMoneySpent, project, isLoading: statsLoading } = useSelector(state => state.statistic);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getExpenseById(expenseId));
    dispatch(getExpenseContribution(expenseId));
  }, [dispatch, expenseId, expenseById?.status]);

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

  }, [dispatch, isSuccess, isError, appErr, serverErr]);

const categoryIcons = {
  Travel: <FlightTakeoffIcon style={{ color: "#fff", fontSize: 35 }}/>,
  Food: <FastfoodIcon style={{ color: "#fff", fontSize: 35 }}/>,
  Accommodation: <HotelIcon style={{ color: "#fff", fontSize: 35 }}/>,
  OfficeSupplies: <LocalPrintshopIcon style={{ color: "#fff", fontSize: 35 }} />,
  Utilities: <ReceiptLongIcon style={{ color: "#fff", fontSize: 35 }} />,
  Gifts: <CardGiftcardIcon style={{ color: "#fff", fontSize: 35 }} />,
  Advertising: <CampaignIcon style={{ color: "#fff", fontSize: 35 }} />,
  Technology: <LaptopIcon style={{ color: "#fff", fontSize: 35 }} />,
  Entertainment: <WineBarIcon style={{ color: "#fff", fontSize: 35 }} />,
  Miscellaneous: <MoreVertIcon style={{ color: "#fff", fontSize: 35 }} />
};

  if (isLoading || statsLoading) {
    return (
      <>
        <div
          className="px-3 py-3"
          style={{
            backgroundImage: `url(${mainbg})`,
            backgroundRepeat: "repeat",
          }}
        >
          <div className="row">
            <div className="col-3">
              <Hamburger4 />
            </div>
            <div className="col-9">
              <div className="row me-2">
                <div className="display-3 fw-semibold">Expense Details</div>
                <div
                  className="col-12 my-3 py-3 rounded-4 d-flex flex-column align-items-start gap-3"
                  style={{
                    backgroundColor: "#304D6D",
                    backgroundImage: `url(${bg1})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: 350,
                  }}
                >
                  <div className="d-flex w-100 mt-4">
                    <Skeleton
                      sx={{ backgroundColor: "white", opacity: 0.2 }}
                      variant="rounded"
                      animation="wave"
                      width="40%"
                      height="6vh"
                    />
                  </div>
                  <div className="d-flex w-100">
                    <Skeleton
                      sx={{ backgroundColor: "white", opacity: 0.2 }}
                      variant="rounded"
                      animation="wave"
                      width="40%"
                      height="6vh"
                    />
                  </div>
                  <div className="d-flex w-100">
                    <Skeleton
                      sx={{ backgroundColor: "white", opacity: 0.2 }}
                      variant="rounded"
                      animation="wave"
                      width="40%"
                      height="6vh"
                    />
                  </div>
                  <div className="d-flex w-100">
                    <Skeleton
                      sx={{ backgroundColor: "white", opacity: 0.2 }}
                      variant="rounded"
                      animation="wave"
                      width="40%"
                      height="6vh"
                    />
                  </div>
                  <div className="d-flex justify-content-between w-100">
                  <div className="d-flex w-50">
                    <Skeleton
                      sx={{ backgroundColor: "white", opacity: 0.2 }}
                      variant="rounded"
                      animation="wave"
                      width="80%"
                      height="6vh"
                    />
                  </div>
                  <div className="d-flex w-50 justify-content-end rounded align-items-center">
                    <Skeleton
                      sx={{ backgroundColor: "white", opacity: 0.2 }}
                      variant="rounded"
                      animation="wave"
                      width="90%"
                      height="6vh"
                    />
                  </div>
               </div>
                </div>
              </div>
              <div className="row gap-5">
                <div className="col-md-5 rounded-4" style={{ minWidth: 530 }}>
                  <div className="row shadow-lg rounded-4 px-2">
                    <div
                      className="heading text-center rounded-4 py-1 mt-2 text-light"
                      style={{ backgroundColor: "#304D6D" }}
                    >
                      <h1>Description</h1>
                    </div>
                    <div
                      className="desc rounded-4 my-2 py-2 px-4"
                      style={{ backgroundColor: "#B3C8E4", minHeight: 200 }}
                    >
                      <Skeleton
                        variant="rounded"
                        animation="wave"
                        width="100%"
                        height="4vh"
                      />
                      <Skeleton
                        sx={{ marginTop: "1vh" }}
                        variant="rounded"
                        animation="wave"
                        width="100%"
                        height="4vh"
                      />
                      <Skeleton
                        sx={{ marginTop: "1vh" }}
                        variant="rounded"
                        animation="wave"
                        width="100%"
                        height="4vh"
                      />
                      <Skeleton
                        sx={{ marginTop: "1vh" }}
                        variant="rounded"
                        animation="wave"
                        width="100%"
                        height="4vh"
                      />
                      <Skeleton
                        sx={{ marginTop: "1vh" }}
                        variant="rounded"
                        animation="wave"
                        width="100%"
                        height="4vh"
                      />
                    </div>
                  </div>
                  {user?.role == "manager" ? (
                    <div className="text-center">
                      <Skeleton
                        sx={{ marginTop: "2vh" }}
                        variant="rounded"
                        animation="wave"
                        width="100%"
                        height="6vh"
                      />

                      {expenseById?.status == "Pending" ? (
                        <div className="d-flex justify-content-center">
                          <Skeleton
                            sx={{ marginTop: "2vh" }}
                            variant="rounded"
                            animation="wave"
                            width="100%"
                            height="6vh"
                          />

                          <Skeleton
                            sx={{ marginTop: "2vh", marginLeft: "2vh" }}
                            variant="rounded"
                            animation="wave"
                            width="100%"
                            height="6vh"
                          />
                        </div>
                      ) : (
                        <div className="d-flex justify-content-center">
                          <div
                            className="status mt-3"
                            style={{ width: "100%" }}
                          >
                            <Skeleton
                              variant="rounded"
                              animation="wave"
                              width="100%"
                              height="6vh"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center">
                      <Skeleton
                        sx={{ marginTop: "2vh" }}
                        variant="rounded"
                        animation="wave"
                        width="100%"
                        height="6vh"
                      />

                      <div className="d-flex justify-content-center">
                        <div className="status mt-3" style={{ width: "100%" }}>
                          <Skeleton
                            variant="rounded"
                            animation="wave"
                            width="100%"
                            height="6vh"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="col-md-5 shadow-lg rounded-4"
                  style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: 400,
                    minWidth: 530,
                  }}
                >
                  <h1 className="text-light">Contribution in Total Budget</h1>
                  <div className="pie d-flex justify-content-end">
                    <div className='mt-5 me-5'>
                        <Skeleton variant="circular" width={200} height={200} />
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className="px-3 py-3"
      style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat" }}
    >
      <div className="row">
        <div className="col-3">
          <Hamburger4 />
        </div>
        <div className="col-9">
          <div className="row me-2">
            <div className="display-3 fw-semibold">Expense Details</div>
            <div
              className="col-12 my-3 py-3 rounded-4 d-flex flex-column align-items-start gap-3"
              style={{
                backgroundColor: "#304D6D",
                backgroundImage: `url(${bg1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                minHeight: 350,
              }}
            >
              <div className="d-flex mt-4">
              {categoryIcons[expenseById?.category]} {" "}
                <h2
                  className="rounded ms-2 px-2"
                  style={{ backgroundColor: "#fff" }}
                >
                  {expenseById?.name}
                </h2>
              </div>
              <div className="d-flex">
                <CalendarMonthIcon style={{ color: "#fff", fontSize: 35 }} />{" "}
                <h2
                  className="rounded ms-2 px-2"
                  style={{ backgroundColor: "#fff" }}
                >
                  {new Date(expenseById?.date).toDateString()}
                </h2>
              </div>
              <div className="d-flex">
                <CategoryIcon style={{ color: "#fff", fontSize: 35 }} />{" "}
                <h2
                  className="rounded ms-2 px-2"
                  style={{ backgroundColor: "#fff" }}
                >
                  {expenseById?.category}
                </h2>
              </div>
              <div className="d-flex">
                <CurrencyRupeeIcon style={{ color: "#fff", fontSize: 35 }} />{" "}
                <h2
                  className="rounded ms-2 px-2"
                  style={{ backgroundColor: "#fff" }}
                >
                  {expenseById?.amount}
                </h2>
              </div>
              <div className="d-flex justify-content-between w-100">
                  <div className="d-flex">
                <PersonIcon style={{ color: "#fff", fontSize: 40 }} /> 
                  <h2
                    className="rounded ms-2 px-2"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {expenseById?.employee_id?.firstName}{" "}
                    {expenseById?.employee_id?.lastName}
                  </h2>
                  </div>
                  <div className="d-flex bg-white rounded align-items-center">
                  <AccountBalanceWalletIcon style={{ fontSize: 40 }} /> 
                  <h2
                    className="rounded ms-2 px-2"
                    style={{ backgroundColor: "#fff" }}
                  >
                    Remaining Budget :
                    &#8377;
                    {project?.budget - totalMoneySpent} 
                  </h2>
                  </div>
              </div>
            </div>
          </div>
          <div className="row gap-5">
            <div className="col-md-5 rounded-4" style={{ minWidth: 530 }}>
              <div className="row shadow-lg rounded-4 px-2">
                <div
                  className="heading text-center rounded-4 py-1 mt-2 text-light"
                  style={{ backgroundColor: "#304D6D" }}
                >
                  <h1>Description</h1>
                </div>
                <div
                  className="desc rounded-4 my-2 py-2 px-4"
                  style={{ backgroundColor: "#B3C8E4", minHeight: 200 }}
                >
                  <p>{expenseById?.description}</p>
                </div>
              </div>
              {user?.role == "manager" ? (
                <div className="text-center">
                  <a
                    href={expenseById?.driveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="btn btn-primary mt-4"
                      style={{ width: "98%", fontSize: "3vh" }}
                    >
                      View Bill
                    </button>
                  </a>
                  {expenseById?.status == "Pending" ? (
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-success m-2 mx-1"
                        style={{ width: "48%", fontSize: "3vh" }}
                        onClick={() =>
                          dispatch(acceptExpense(expenseById?._id))
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger m-2 mx-1"
                        style={{ width: "48%", fontSize: "3vh" }}
                        onClick={() =>
                          dispatch(rejectExpense(expenseById?._id))
                        }
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <div className="status mt-3" style={{ width: "98%" }}>
                        <div
                          className={`py-2 ${
                            expenseById?.status == "Rejected"
                              ? "bg-danger"
                              : expenseById?.status == "Approved"
                              ? "bg-success"
                              : "bg-warning"
                          } rounded text-light`}
                          style={{ fontSize: "3vh" }}
                        >
                          {expenseById?.status == "Rejected"
                            ? "Rejected"
                            : expenseById?.status === "Approved"
                            ? "Approved"
                            : "Pending"
                          }
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <a
                    href={expenseById?.driveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="btn btn-primary mt-4"
                      style={{ width: "98%", fontSize: "3vh" }}
                    >
                      View Bill
                    </button>
                  </a>
                  <div className="d-flex justify-content-center">
                    <div className="status mt-3" style={{ width: "98%" }}>
                    <div
                          className={`py-2 ${
                            expenseById?.status == "Rejected"
                              ? "bg-danger"
                              : expenseById?.status == "Approved"
                              ? "bg-success"
                              : "bg-warning"
                          } rounded text-light`}
                          style={{ fontSize: "3vh" }}
                        >
                          {expenseById?.status == "Rejected"
                            ? "Rejected"
                            : expenseById?.status == "Approved"
                            ? "Approved"
                            : "Pending"
                            }
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className="col-md-5 shadow-lg rounded-4"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                minHeight: 400,
                minWidth: 530,
              }}
            >
              <h1 className="text-light p-2">Contribution in Total Spent Budget</h1>
              <PortionInTotalPie />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
