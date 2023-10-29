import { useState, useRef, useEffect } from "react";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { Hamburger2 } from "../components/Hamburger_2";

export const Project = () => {
  const colors = ["#163763", "#3452B9", "#005483", "#8E8E8E", "#3C3C3C"];
  const [buttons, setButtons] = useState([]);
  const lastButtonRef = useRef(null);

  const addNewButton = () => {
    const newIndex = buttons.length % colors.length;
    const newButtons = [
      ...buttons,
      {
        projectName: `Project ${buttons.length + 1}`,
        managerName: `Manager ${buttons.length + 1}`,
        color: colors[newIndex],
      },
    ];
    setButtons(newButtons);
  };

  useEffect(() => {
    if (lastButtonRef.current) {
      lastButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [buttons]);

  return (
    <div
      className="px-3 py-3"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="row">
        <div className="col-3">
          <Hamburger2 />
        </div>
        <div className="col-9 px-4" style={{marginTop: "-1vh"}}>
          <div style={{ minHeight: "85vh" }}>
            <div className="row">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  ref={index === buttons.length - 1 ? lastButtonRef : null}
                  style={{
                    margin: "0.5%",
                    padding: "2.5%",
                    backgroundColor: button.color,
                    color: "#fff",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    textAlign: "left",
                    boxShadow: "0px 4px 8px rgba(5, 5, 5, 5)",
                  }}
                >
                  {button.name}
                  <div style={{ fontSize: "32px" }}>{button.projectName}</div>
                  <div style={{ fontSize: "20px" }}>{button.managerName}</div>
                </button>
              ))}
              <button
                style={{
                  position: "absolute",
                  bottom: "25px",
                  right: "10px",
                  width: "50px",
                  height: "50px",
                  fontSize: "24px",
                  border: "none",
                  borderRadius: "50%",
                  backgroundColor: "blue",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={addNewButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
