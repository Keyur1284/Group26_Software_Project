import React from "react";
import '../css/Invites.css';

const CardStyle = {
  backgroundColor: "#295CAA",
  fontSize: "4vh",
  fontWeight: 400,
  color: "#ffff",
};

const ButtonStyle = {
  backgroundColor: "#B3C8E4",
};

const Button = {
  backgroundColor: "#295CAA",
  fontSize: "3vh",
  fontWeight: 400,
};

const inlineStyles1 = {
  backgroundColor: "#D9D9D9",
  fontSize: "4vh",
  fontWeight: 400,
};
const inlineStyles2 = {
  backgroundColor: "#FFFFFF",
  fontSize: "4vh",
  fontWeight: 400,
};

const textStyles = {
  fontSize: "4vh",
  fontWeight: 400,
};

const divStyle = {
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "lightgray",
};

export const InviteCard = (props) => {

  const invitesDetails = [
    
    {
      id: 1,
      projectName: "project2",
      managerName: "Manager 2"
    },
    {
      id: 2,
      projectName: "project3",
      managerName: "Manager 3"
    },
    {
      id: 2,
      projectName: "project3",
      managerName: "Manager 3"
    }
  ];

  return (
    <div className="m-5">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {invitesDetails.map((invite, index) => (
          <div key={index} className="p-4 " style={{ flex: "0 0 calc(50% - 10px)", marginBottom: "20px" }}>
            <div className="m-2  rounded rounded-3" style={CardStyle}>
              <div className="m-3 p-2">{invite.managerName}</div>
              <div className="m-3 p-2">{invite.projectName}</div>
              <div
                className="rounded rounded-3 justify-content-end d-flex flex left"
                style={ButtonStyle}
              >

                <div className="p-3 justify-content-end">
                  <button
                    type="button"
                    className="InviteBtn rounded rounded-3 p-2 me-3"
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
