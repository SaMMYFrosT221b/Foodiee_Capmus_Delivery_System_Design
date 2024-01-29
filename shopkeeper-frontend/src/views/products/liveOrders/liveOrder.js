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
import Toast_alert from '../alert/alert';
import axios from 'axios';
import { DocsExample } from 'src/components';
import { useNavigate } from 'react-router-dom';
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
    const [alert, setalert] = useState(null);
    const [btnDisable, setBtnDisable] = useState({});
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
                    // setdata(fetched_data);
                    const dataWithStatus = fetched_data.map(item => ({ ...item, status: null }));
                    setdata(dataWithStatus);

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

    const approved = async (item, itemStatus) => {
        try {
            const orderStatus = {
                "USERID": item.UserID,
                "ShopkeeperID": item.ShopkeeperID,
                "itemID": item.ItemID,
                "orderStatus": itemStatus,
            }
            console.log(orderStatus);
            const res = await axios.put("http://localhost:5000/shopkeeper/update-order-status/1", orderStatus, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(res);
            if (res.status == 200) {
                setalert({
                    alert: itemStatus,
                    time: "less than a mins ago",
                    message: `The item has been ${itemStatus.toLowerCase()}`
                }
                )
                // Update the status for the specific item
                setdata(prevData => prevData.map(prevItem => (prevItem.ItemID === item.ItemID ? { ...prevItem, OrderStatus: itemStatus } : prevItem)))
                setBtnDisable(prevState => ({ ...prevState, [item.ItemID]: true }));
            }
        }
        catch (error) {
            console.log(error);
            setalert({
                alert: "Failed",
                time: itemStatus,
                message: "Sorry,Failed ! Try Again after Sometime."
            }
            )
        }

    }



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
                        {alert && <Toast_alert alert={alert} />}
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
                                        <CTableRow key={item.ItemID} className={item.OrderStatus === "Approved" ? "table-success" : item.OrderStatus === "Rejected" ? "table-danger" : ""}>

                                            <CTableHeaderCell scope="row">{item.ItemID}</CTableHeaderCell>
                                            <CTableHeaderCell scope="row">{item.UserID}</CTableHeaderCell>
                                            <CTableDataCell>{item.TotalQuantity}
                                            </CTableDataCell>
                                            <CTableDataCell>{item.TotalAmount}</CTableDataCell>
                                            <CTableDataCell>
                                                <CBadge color={item.OrderStatus === "Approved" ? "success" : item.OrderStatus === "Rejected" ? "danger" : "warning"}>{item.OrderStatus}</CBadge>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <button className={`btn btn-success mx-2 ${item.OrderStatus === "Approved" ? "disabled" : ""}`}
                                                    onClick={() => approved(item, "Approved")} type="button" disabled={btnDisable[item.ItemID]}>
                                                    <CIcon icon={icon.cilCheck} size="sm" />
                                                </button>
                                                <button className={`btn btn-danger ${item.OrderStatus === "Rejected" ? "disabled" : ""}`}
                                                    onClick={() => approved(item, "Rejected")} type="button" disabled={btnDisable[item.ItemID]}>
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

export default liveOrders