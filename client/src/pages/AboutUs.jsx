import pic_1 from '../assets/AboutUs-images/Vedant.jpg';
import pic_2 from '../assets/AboutUs-images/Jainil.jpg';
import pic_3 from '../assets/AboutUs-images/Himanshu_photo.jpg';
import pic_4 from '../assets/AboutUs-images/Ayush.jpg';
import pic_5 from '../assets/AboutUs-images/Nancy.jpg';
import pic_6 from '../assets/AboutUs-images/Keyur.jpeg';
import pic_7 from '../assets/AboutUs-images/Kashish.jpg';
import pic_8 from '../assets/AboutUs-images/Akhil.jpg';
import pic_9 from '../assets/AboutUs-images/Hardik.jpg';
import pic_10 from '../assets/AboutUs-images/Sahil.jpg';
import pic_11 from '../assets/AboutUs-images/Ishita.jpg';

const cardData = [
  {
    name: 'Vedant Pandya',
    rollNumber: '202101063',
    imgSrc: pic_1,
    role: 'Frontend Developer',
  },
  {
    name: 'Jainil Patel',
    rollNumber: '202101416',
    imgSrc: pic_2,
    role: 'Frontend Developer',
  },
  {
    name: 'Himanshu Vachhani',
    rollNumber: '202101475',
    imgSrc: pic_3,
    role: 'Full Stack Developer'
  },
  {
    name: 'Aayush Patel',
    rollNumber: '202101476',
    imgSrc: pic_4,
    role: 'Frontend Developer',
  },
  {
    name: 'Nancy Patel',
    rollNumber: '202101491',
    imgSrc: pic_5,
    role: 'Frontend Developer',
  },
  {
    name: 'Keyur Govrani',
    rollNumber: '202101498',
    imgSrc: pic_6,
    role: 'Full Stack Developer',
  },
  {
    name: 'Kashish Patel',
    rollNumber: '202101502',
    imgSrc: pic_7,
    role: 'Frontend Developer',
  },
  {
    name: 'Akhil Patoliya',
    rollNumber: '202101505',
    imgSrc: pic_8,
    role: 'UI/UX Designer',
  },
  {
    name: 'Hardik Mehta',
    rollNumber: '202101506',
    imgSrc: pic_9,
    role: 'Frontend Developer',
  },
  {
    name: 'Sahil Bhadesiya',
    rollNumber: '202101511',
    imgSrc: pic_10,
    role: 'UI/UX Designer',
  },
  {
    name: 'Ishita Rathod',
    rollNumber: '202101516',
    imgSrc: pic_11,
    role: 'UI/UX Designer',
  },
];


const generateCard = (card) => {
  return (
    <div className="col-md-3 d-flex" key={card.name}>
      <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "52vh", width: "25vw", backgroundColor: "#013E8F", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <img
          className="card-img-top img-fluid rounded-top-5"
          src={card.imgSrc}
          alt={card.name}
          style={{ height: "40vh", width: "25vw" }}
        />
        <div className="card-body text-center" style={{ color: "white", maxWidth: "100%", marginTop: "-1vh"}}>
          <h5 className="mb-0" style={{fontSize: "3vh"}}>
            {card.name}
          </h5>
          <div>
            ({card.rollNumber})
          </div>
          <div>
            {card.role}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="container-fluid">
      <style>
        {`
          body {
            background: radial-gradient(circle, #00b3b3, #0066cc);
          }
        `}
        {`
          .card-hover {
            transform: scale(1);
            transition: transform 0.4s, box-shadow 0.2s;
          }

          .card-hover:hover {
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
          }
        `}
      </style>
      <div className="row align-items-center">
        <div className="col-lg-12 mt-3 mb-3">
          <span className="display-1 d-block text-center mt-3 fw-normal" style={{ color: "white", fontSize: "8vh" }}>
          The Collaborative Force Driving Xpense Tracker
          </span>
        </div>
      </div>

      <div className="row justify-content-center ps-4 pe-4 mt-5">
        {cardData.slice(0, 4).map(generateCard)}
      </div>

      <div className="row justify-content-center ps-4 pe-4 mt-5">
        {cardData.slice(4, 7).map(generateCard)}
      </div>

      <div className="row justify-content-center ps-4 pe-4 mt-5 mb-5">
        {cardData.slice(7, 11).map(generateCard)}
      </div>
    </div>
  );
};

