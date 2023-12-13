import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PaymentScreen = () => {
  const navigate = useNavigate();
   const { id: courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);


useEffect(() => {
  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/courses/${courseId}`
      );
      const selectedCourse = response.data;
      setCourseDetails(selectedCourse);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  fetchCourseDetails();
}, [courseId]);
console.log(courseDetails);
const handlePayment = async () => {
  
    setIsPaymentSuccessful(true);

 
 
};




  return (
    <div className="container mt-4">
      {!isPaymentSuccessful ? (
        <div>
          <h2>Payment Information</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">
                Card Number
              </label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expiryDate" className="form-label">
                Expiry Date
              </label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePayment}
            >
              Make Payment
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Payment Successful</h2>
          <p>You have successfully enrolled in the course:</p>

          <div key={courseDetails.id}>
            <div className="col mb-4">
              <div className="card">
                <img
                  src={courseDetails.image}
                  className="card-img-top"
                  alt={courseDetails.title}
                />
                <div className="card-body">
                  <h2 className="card-title">{courseDetails.title}</h2>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">Instructor Name</th>
                        <td>{courseDetails.instructorName}</td>
                      </tr>
                      <tr>
                        <th scope="row">Instructor Surname</th>
                        <td>{courseDetails.instructorSurname}</td>
                      </tr>
                      <tr>
                        <th scope="row">Duration</th>
                        <td>{courseDetails.duration} Weeks</td>
                      </tr>
                      <tr>
                        <th scope="row">Price</th>
                        <td>{courseDetails.price}TL</td>
                      </tr>
                      <tr>
                        <th scope="row">Content</th>
                        <td>{courseDetails.content}</td>
                      </tr>
                      <tr>
                        <th scope="row">Category</th>
                        <td>{courseDetails.categoryId}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-success">Start Course</button>
        </div>
      )}
    </div>
  );
};

export default PaymentScreen;
