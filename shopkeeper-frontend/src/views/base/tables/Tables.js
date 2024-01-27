import React, { useState } from 'react'
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
const Tables = async() => {
  // const shopID = 1;

 async function getUpdatedData  (){
    const data = await axios("http://localhost:5000/shopkeeper/catalogue/1");
    return data.data;
  }

  let rat = [{
    "ItemName": "MAggie",
    "Description": "Love it",
    "Price": 10,
    "ExpectedTime": 20,
    "CousineType": "India"
  }, {
    "ItemName": "MAggie",
    "Description": "Love it",
    "Price": 10,
    "ExpectedTime": 20,
    "CousineType": "India"
  }, {
    "ItemName": "MAggie",
    "Description": "Love it",
    "Price": 10,
    "ExpectedTime": 20,
    "CousineType": "India"
  }, {
    "ItemName": "MAggie",
    "Description": "Love it",
    "Price": 10,
    "ExpectedTime": 20,
    "CousineType": "India"
  }, {
    "ItemName": "MAggie",
    "Description": "Love it",
    "Price": 10,
    "ExpectedTime": 20,
    "CousineType": "India"
  }]
  // const [data, setData] = useState(rat);

  // const [details, setDetails] = useState([])

  
  // const items = getUpdatedData();
  // console.log("rat",items);
  
  const data = await axios("http://localhost:5000/shopkeeper/catalogue/1");
  const [hello,setHello] = useState([{}]);
  console.log("Length",Object.keys(data))
  if(Object.keys(data)){
    let items = [];
    for(let i = 0;i<Object.keys(data);i++){
      temp.push(data[i]);
    }
    setHello(items);
    console.log("RAT", hello);
  }

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
                {hello.map((item, index) => {
                  console.log(item);
                  return (
                    <CTableRow color="success">
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
