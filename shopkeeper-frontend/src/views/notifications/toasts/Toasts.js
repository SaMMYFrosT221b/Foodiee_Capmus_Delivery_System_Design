import React, { useRef, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const ExampleToast = () => {
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast title="CoreUI for React.js">
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
        <strong className="me-auto">CoreUI for React.js</strong>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
  return (
    <>
      <CButton onClick={() => addToast(exampleToast)}>Send a toast</CButton>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

const Toasts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Basic</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Toasts are as flexible as you need and have very little required markup. At a minimum,
              we require a single element to contain your “toasted” content and strongly encourage a
              dismiss button.
            </p>
            <DocsExample href="components/toast">
              <CToast title="CoreUI for React.js" autohide={false} visible={true}>
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
                  <strong className="me-auto">CoreUI for React.js</strong>
                  <small>7 min ago</small>
                </CToastHeader>
                <CToastBody>Hello, world! This is a toast message.</CToastBody>
              </CToast>
            </DocsExample>
            <DocsExample href="components/toast">{ExampleToast()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Toasts
