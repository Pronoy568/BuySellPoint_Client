/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const BuyItem = () => {
  const [buyItem, setBuyItem] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchBuyItem();
  }, []);

  const fetchBuyItem = async () => {
    try {
      const response = await axios.get(
        `https://buy-sell-point-server.vercel.app/payments?email=${user.email}`
      );
      const data = response.data;
      setBuyItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <SectionTitle heading="Buy Product"></SectionTitle>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Total Price</th>
              <th>Date</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {buyItem.map((payment) => (
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
                <td>{payment.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyItem;
