import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://your-api-url.com/customers");
      const data = await response.json();
      setCustomers(data.customers);
      setLoading(false);
    } catch (error) {
      setError("Failed to load customer data.");
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Admin Panel</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Customer Activities</h2>
          <input
            type="text"
            placeholder="Search by customer name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md w-1/3"
          />
        </div>

        {loading ? (
          <p>Loading customer data...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredCustomers.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 p-4">Name</th>
                <th className="border-b-2 p-4">Email</th>
                <th className="border-b-2 p-4">Phone Number</th>
                <th className="border-b-2 p-4">Age</th>
                <th className="border-b-2 p-4">Payment Status</th>
                <th className="border-b-2 p-4">Amount Paid</th>
                <th className="border-b-2 p-4">Registered Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-4">{customer.name}</td>
                  <td className="p-4">{customer.email}</td>
                  <td className="p-4">{customer.phoneNumber}</td>
                  <td className="p-4">{customer.age}</td>
                  <td
                    className={`p-4 ${
                      customer.paymentStatus === "Paid"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {customer.paymentStatus}
                  </td>
                  <td className="p-4">${customer.amountPaid}</td>
                  <td className="p-4">
                    {new Date(customer.registeredAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No customers found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
