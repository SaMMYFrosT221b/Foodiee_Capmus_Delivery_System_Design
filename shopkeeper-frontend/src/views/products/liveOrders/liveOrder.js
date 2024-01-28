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
const liveOrders = () => {

    const [data, setdata] = useState([]);
    useEffect(() => {
        // this variable is local to the effect, and will be set to true when the effect is cleaned up
        let ignore = false;

        (async () => {
            try {
                // Fetch data from the new URL
                const response = await fetch('http://localhost:5000/shopkeeper/live-orders/1');

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
                        <strong>LiveOrders </strong> <small>username</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            Please accept the pending request.
                        </p>
                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    {/* <CTableHeaderCell scope="col">ShopkeeperID</CTableHeaderCell> */}
                                    <CTableHeaderCell scope="col">ItemID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">UserID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">TotalQuantity</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">TotalAmount</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">OrderStatus</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>

                            <CTableBody>
                                {data.map((item, index) => {
                                    // console.log(item);
                                    return (
                                        <CTableRow key={item.ItemID} color="secondary">

                                            <CTableHeaderCell scope="row">{item.ItemID}</CTableHeaderCell>
                                            <CTableHeaderCell scope="row">{item.UserID}</CTableHeaderCell>
                                            <CTableDataCell>{item.TotalQuantity}
                                            </CTableDataCell>
                                            <CTableDataCell>{item.TotalAmount}</CTableDataCell>
                                            <CTableDataCell>
                                            <CBadge color="warning">{item.OrderStatus}</CBadge>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <button class="btn btn-success mx-2" type="button">
                                                <CIcon icon={icon.cilCheck} size="sm"/>
                                                </button>
                                                <button class="btn btn-danger" type="button">
                                                <CIcon icon={icon.cilTrash} size="sm"/>
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

export default liveOrders