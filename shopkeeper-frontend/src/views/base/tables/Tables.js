import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import axios from 'axios';
/*
"ItemName": "Maggi",
    "Description": "I ate maggi today at 6pm for snakcs, it taste really good, though it's bawasir.",
    "Price": "25.00",
    "ImageURL": "...",
    "ExpectedTime": "12",
    "CousineType": "Chinese,Korean,Indian",
    const items = fetch(`http://localhost:5000/shopkeeper/catalogue/1`);
    console.log(items);
*/
const Tables = () => {

  const [data, setdata] = useState([]);
  useEffect(() => {
    // this variable is local to the effect, and will be set to true when the effect is cleaned up
    let ignore = false;

    (async () => {
      try {
        // Fetch data from the new URL
        const response = await fetch('http://localhost:5000/shopkeeper/catalogue/1');

        if (!response.ok) {
          // Handle non-successful response (optional)
          console.error(`Error fetching data: ${response.statusText}`);
          return;
        }

        // Assuming response.json() returns the data you need
        const fetched_data = await response.json();
        if (!ignore) {
          setdata(fetched_data);
        }
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


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Orders History</strong> <small>username</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Here the list of Orders will pop-up
            </p>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ItemName</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ExpectedTime</CTableHeaderCell>
                  <CTableHeaderCell scope="col">CousineType</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {data.map((item, index) => {
                  // console.log(item);
                  return (
                    <CTableRow key={item.ItemID} color="success">
                      <CTableHeaderCell scope="row">{item.ItemName}</CTableHeaderCell>
                      <CTableDataCell>{item.Description}</CTableDataCell>
                      <CTableDataCell>{item.Price}</CTableDataCell>
                      <CTableDataCell>{item.ExpectedTime}</CTableDataCell>
                      <CTableDataCell>{item.CousineType}</CTableDataCell>
                    </CTableRow>
                  )
                })}
                <CTableRow color="success">
                  <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default Tables