/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/payments?email=${user.email}`
      );
      const data = response.data;
      setPaymentHistory(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center font-bold text-4xl my-10">Payment History</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Total Price</th>
              <th>Date</th>
              <th>TransactionId</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment) => (
              <tr key={payment._id}>
                <td>
                  <div>
                    {payment.itemNames.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </td>
                <td>${payment.price}</td>
                <td>{payment.date}</td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
