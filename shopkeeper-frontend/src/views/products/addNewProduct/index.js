import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToast,
  CToastHeader,
  CToastBody,
  
} from '@coreui/react'
import axios from 'axios';

const Toast = ({alert}) =>{
  return (
  <CToast animation={false} autohide={false} visible={true}>
          <CToastHeader closeButton>
            <svg
              className="rounded me-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect width="100%" height="100%" fill="#007aff"></rect>
            </svg>
            <div className="fw-bold me-auto">{alert.alert}</div>
            <small>{alert.time}</small>
          </CToastHeader>
          <CToastBody>{alert.message}</CToastBody>
        </CToast>
  )
}

const addNewProduct = () => {
  const [credentials, setCredentials] = useState({
    "ShopkeeperID": 1,
    "ItemName": "Jalebi",
    "Description": "I ate Pasta today at 6pm for snakcs, Rat loves pasta.",
    "Price": 40.00,
    "ImageURL": "...",
    "ExpectedTime": 16,
    "CousineType": "Chinese,Korean,Indian"
  });
  const [alert,setalert] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Here we check", credentials);
    try {
      const res = await axios.post("http://localhost:5000/shopkeeper/add-item", credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(res);
      if (res.status==200) {
        console.log("ehllo");
        setalert({
          alert:"Success",
          time: "Less than a minute ago",
          message: "Congrats! Your Item is added ,You can switch to allProduct to view."
        }
        )
      }
    }
    catch (error) {
      console.log(error);
      setalert({
        alert:"Failed",
        time: "Less than a minute ago",
        message: "Sorry,Failed ! Try Again after Sometime."
      }
      )
      
    }

  }

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add New Product</strong> <small>username</small>
          </CCardHeader>
          {alert && <Toast alert={alert}/>}
          <CCardBody>
            <CForm className="row g-3 needs-validation" onSubmit={handleSubmit}>
              <CCol md={6}>
                <CFormLabel htmlFor="name">ItemName</CFormLabel>
                <CFormInput type="text" id="ItemName" name='ItemName' defaultValue="" placeholder='Name of the item' onChange={onchange} required />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="Price">Price</CFormLabel>
                <CFormInput type="text" id="Price" name='Price' defaultValue="" placeholder='Price' onChange={onchange} required />
              </CCol>
              <CCol md={12}>
                <CFormLabel htmlFor="Description">Description</CFormLabel>
                <CFormTextarea feedbackInvalid="Please add description about the item." id="Description" onChange={onchange} label="Description" name='Description' placeholder="add description about the item" required></CFormTextarea>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="ExpectedTime">ExpectedTime</CFormLabel>
                <CFormInput type="ExpectedTime" id="ExpectedTime" name='ExpectedTime' defaultValue="" onChange={onchange} placeholder='Preparation Time' required />

              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="CousineType">CousineType</CFormLabel>
                <CFormInput type="text" id="price" name='CousineType' defaultValue="" placeholder='Country it is famous in?' onChange={onchange} required />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="ImageURL">ImageURL</CFormLabel>
                <CFormInput type="text" id="ImageURL" name='ImageURL' defaultValue="" placeholder='SampleImageURL' onChange={onchange} required />
              </CCol>

              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Submit form
                </CButton>
              </CCol>
            </CForm>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default addNewProduct