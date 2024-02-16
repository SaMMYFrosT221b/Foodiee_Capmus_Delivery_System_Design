import axios from 'axios';
import { useEffect, useState } from 'react';

const TableThree = () => {
  const [data, setdata] = useState([]);
  const [uniqueIDs, setuniqeUSERID] = useState([]);
  useEffect(() => {
    // this variable is local to the effect, and will be set to true when the effect is cleaned up
    let ignore = false;

    (async () => {
      try {
        // Fetch data from the new URL
        const response = await fetch(
          `https://chapel-releases-revolution-venues.trycloudflare.com/deliveryboy/live-delivery-orders`,
        );

        console.log('response ', response);

        if (!response.ok) {
          // Handle non-successful response (optional)
          console.error(`Error fetching data: ${response.statusText}`);
          return;
        }
        const fetched_data = await response.json();

        console.log('Data recieved is : ', fetched_data);
        setdata(fetched_data[0]['items']);
        setuniqeUSERID(fetched_data[0]['distinctUser']);
      } catch (error) {
        // Handle errors during the fetch (optional)
        console.error('Error fetching data:', error);
      }
    })();
    return () => {
      // on cleanup, prevent the setIsRead(true) call from happening
      ignore = true;
    };
  }, []);
  console.log('the unique ids are ', uniqueIDs);

  return (
    <>
      {uniqueIDs.map((id, index) => {
        return (
          <>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left dark:bg-meta-4">
                      <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                        ItemName
                      </th>
                      <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                        ShopName
                      </th>
                      <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                        UserName
                      </th>
                      <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                        Status
                      </th>
                      <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                        Total Amount
                      </th>
                      <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                        Total Quantity
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((packageItem, key) => {
                      if (id.UserID !== packageItem.UserID) {
                        return null;
                      }
                      return (
                        <div key={key}>
                          {/* Other JSX elements */}
                          <tr key={key}>
                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                              <h5 className="font-medium text-black dark:text-white">
                                {packageItem.ItemName}
                              </h5>
                              {/* <p className="text-sm">${packageItem}</p> */}
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                              <p className="text-black dark:text-white">
                                {packageItem.ShopName}
                              </p>
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                              <p className="text-black dark:text-white">
                                {packageItem.UserName}
                              </p>
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                              <p className="text-black dark:text-white">
                                {packageItem.OrderStatus}
                              </p>
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                              <p className="text-black dark:text-white">
                                {packageItem.TotalQuantity}
                              </p>
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                              <p className="text-black dark:text-white">
                                {packageItem.TotalAmount}
                              </p>
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                              <p
                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                                  packageItem.status === 'Paid'
                                    ? 'bg-success text-success'
                                    : packageItem.status === 'Unpaid'
                                    ? 'bg-danger text-danger'
                                    : 'bg-warning text-warning'
                                }`}
                              >
                                {packageItem.status}
                              </p>
                            </td>
                          </tr>
                        </div>
                      );
                    })}
                    <tr>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary border p-2 rounded text-green-500"
                            onClick={() => {
                              alert('Order accepted! rush rush rush');
                            }}
                          >
                            Approve
                          </button>
                          <button
                            className="hover:text-primary border p-2 rounded text-red-500"
                            onClick={() => {
                              alert(
                                'No Problem.... Give Feedback Why you rejected this order.',
                              );
                            }}
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TableThree;
