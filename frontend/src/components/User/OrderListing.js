import React from "react";

const orders = [
  {
    OrderID: 1,
    ItemID: 101,
    UserID: 201,
    ShopkeeperID: 301,
    TotalAmount: 500.0,
    TotalQuantity: 5,
    OrderStatus: "Delivered",
    OrderedAt: new Date().toISOString(),
  },
  {
    OrderID: 2,
    ItemID: 102,
    UserID: 202,
    ShopkeeperID: 302,
    TotalAmount: 300.0,
    TotalQuantity: 3,
    OrderStatus: "In Transit",
    OrderedAt: new Date().toISOString(),
  },
  // Add more orders as needed
];

const OrderTable = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "OrderID",
                    "ItemID",
                    "UserID",
                    "ShopkeeperID",
                    "TotalAmount",
                    "TotalQuantity",
                    "OrderStatus",
                    "OrderedAt",
                  ].map((header, idx) => (
                    <th
                      key={idx}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.OrderID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.ItemID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.UserID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.ShopkeeperID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.TotalAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.TotalQuantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.OrderStatus}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.OrderedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
