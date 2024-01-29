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
    CButton,
    CPagination,
    CPaginationItem,
    CPopover,
    CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import axios from 'axios';
import { DocsExample } from 'src/components';
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
                        <strong>Catalogue </strong> <small>username</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            You have added the following items to Our Foodie App.
                        </p>
                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">
                                    <CIcon icon={icon.cilFastfood} size="sm"/>ItemName</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                    <CIcon icon={icon.cilMoney} size="sm"/>
                                        Price
                                        </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                    <CIcon icon={icon.cilAvTimer} size="sm"/>ExpectedTime</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                    <CIcon icon={icon.cifIn} size="sm"/>CousineType</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                    <CIcon icon={icon.cifIn} size="sm"/>Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>

                            <CTableBody>
                                {data.map((item, index) => {
                                    // console.log(item);
                                    return (
                                        <CTableRow key={item.ItemID} color="secondary">
                                            <CTableHeaderCell scope="row">{item.ItemName}</CTableHeaderCell>
                                            <CTableDataCell>{item.Description.slice(0,20)+".. "}   
                                            <CPopover
                                                title="Description"
                                                content={item.Description}
                                                placement="right"
                                            >
                                                <CButton color="primary" size="sm">
                                                    Details
                                                </CButton>
                                            </CPopover>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                            <CBadge color="success">{item.Price}</CBadge></CTableDataCell>
                                            <CTableDataCell><CBadge color="dark">{item.ExpectedTime}</CBadge></CTableDataCell>
                                            <CTableDataCell>{item.CousineType}</CTableDataCell>
                                            <CTableDataCell>
                                                <button className={"btn btn-success mx-2"}
                                                     type="button" >
                                                    <CIcon icon={icon.cilCheck} size="sm" />
                                                </button>
                                                <button className={"btn btn-danger mx-2"}
                                                     type="button" >
                                                    <CIcon icon={icon.cilTrash} size="sm" />
                                                </button>
                                                

                                            </CTableDataCell>
                                            
                                        </CTableRow>
                                    )
                                })}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
            <CPagination aria-label="Page navigation example">
                <CPaginationItem>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
            </CPagination>
        </CRow>
    )
}

export default Tables