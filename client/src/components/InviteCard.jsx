import { useEffect } from 'react';
import '../css/Invites.css';
import { useDispatch, useSelector } from 'react-redux';
import { getInvites, reset } from '../features/invite/inviteSlice';
import Skeleton from '@mui/material/Skeleton';

const CardStyle = {
  backgroundColor: "#295CAA",
  fontSize: "4vh",
  fontWeight: 400,
  color: "#ffff",
};

const ButtonStyle = {
  backgroundColor: "#B3C8E4",
};

export const InviteCard = () => {

  const dispatch = useDispatch();
  const { invitations, isSuccess, isLoading, isError, appErr, serverErr } = useSelector((state) => state.invite);

  useEffect(() => {
    dispatch(getInvites());
  }, [dispatch]);

  useEffect(() => {

    if (isSuccess || isError) 
    {
      dispatch(reset());
    }
  }, [dispatch, isSuccess, isError]);

  if (isLoading)
  {
    return (
      <>
        <div className="m-5" style={{minHeight: "70vh"}}>
      <div className='gap-5 p-5' style={{ display: "flex", flexWrap: "wrap" }}>
      <Skeleton variant="rounded" width="45%" height={250} />
      <Skeleton variant="rectangular" width="45%" height={250} />
      <Skeleton variant="rectangular" width="45%" height={250} />
      <Skeleton variant="rectangular" width="45%" height={250} />
      </div>
    </div>
      </>
    )
  }

  return (
    <div className="m-5" style={{minHeight: "70vh"}}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {invitations.map((invite, index) => (
          <div key={index} className="p-4 " style={{ flex: "0 0 calc(50% - 10px)", marginBottom: "20px" }}>
            <div className="m-2  rounded rounded-3" style={CardStyle}>
              <div className="m-3 p-2">{invite.manager_id.firstName + " " + invite.manager_id.lastName}</div>
              <div className="m-3 p-2">{invite.project_id.name}</div>
              <div
                className="rounded rounded-3 justify-content-end d-flex flex left"
                style={ButtonStyle}
              >

                <div className="p-3 justify-content-end">
                  <button
                    type="button"
                    className="InviteBtn rounded rounded-3 p-2 me-3"
                    onClick={() => {
                      console.log(invite._id);
                    }
                    }
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
