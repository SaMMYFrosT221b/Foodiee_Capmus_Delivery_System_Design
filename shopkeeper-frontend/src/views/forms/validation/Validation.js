import React, { useState } from 'react'
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
} from '@coreui/react'
import { DocsExample } from 'src/components'

const CustomStyles = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const BrowserDefaults = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm className="row g-3 needs-validation" validated={validated} onSubmit={handleSubmit}>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault01">Email</CFormLabel>
        <CFormInput type="text" id="validationDefault01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault02">Email</CFormLabel>
        <CFormInput type="text" id="validationDefault02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationDefault03">City</CFormLabel>
        <CFormInput type="text" id="validationDefault03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault04">City</CFormLabel>
        <CFormSelect id="validationDefault04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault05">City</CFormLabel>
        <CFormInput type="text" id="validationDefault05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const Tooltips = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Email</CFormLabel>
        <CFormInput type="text" id="validationTooltip01" defaultValue="Mark" required />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Email</CFormLabel>
        <CFormInput type="text" id="validationTooltip02" defaultValue="Otto" required />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationTooltipUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback tooltip invalid>
            Please choose a username.
          </CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip03" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">City</CFormLabel>
        <CFormSelect id="validationTooltip04" required>
          <option disabled defaultValue="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip05" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const Validation = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Server side</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              We recommend using client-side validation, but in case you require server-side
              validation, you can indicate invalid and valid form fields with <code>invalid</code>{' '}
              and <code>valid</code> boolean properties.
            </p>
            <p className="text-medium-emphasis small">
              For invalid fields, ensure that the invalid feedback/error message is associated with
              the relevant form field using <code>aria-describedby</code> (noting that this
              attribute allows more than one <code>id</code> to be referenced, in case the field
              already points to additional form text).
            </p>
            <DocsExample href="forms/validation#server-side">
              <CForm className="row g-3 needs-validation">
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServer01">Email</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationServer01"
                    defaultValue="Mark"
                    valid
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServer02">Email</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationServer02"
                    defaultValue="Otto"
                    valid
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
                  <CInputGroup className="has-validation">
                    <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
                    <CFormInput
                      type="text"
                      id="validationServerUsername"
                      defaultValue=""
                      aria-describedby="inputGroupPrepend03"
                      invalid
                      required
                    />
                    <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="validationServer03">City</CFormLabel>
                  <CFormInput type="text" id="validationServer03" invalid required />
                  <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="validationServer04">City</CFormLabel>
                  <CFormSelect id="validationServer04" invalid>
                    <option disabled>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="validationServer05">City</CFormLabel>
                  <CFormInput type="text" id="validationServer05" invalid required />
                  <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CFormCheck
                    type="checkbox"
                    id="invalidCheck"
                    label="Agree to terms and conditions"
                    invalid
                    required
                  />
                  <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Submit form
                  </CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
