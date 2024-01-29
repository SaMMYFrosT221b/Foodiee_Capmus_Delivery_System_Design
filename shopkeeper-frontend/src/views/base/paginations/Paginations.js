import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Paginations = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              We use a large block of connected links for our pagination, making links hard to miss
              and easily scalable—all while providing large hit areas. Pagination is built with list
              HTML elements so screen readers can announce the number of available links. Use a
              wrapping <code>&lt;nav&gt;</code> element to identify it as a navigation section to
              screen readers and other assistive technologies.
            </p>
            <p className="text-medium-emphasis small">
              In addition, as pages likely have more than one such navigation section, it&#39;s
              advisable to provide a descriptive <code>aria-label</code> for the{' '}
              <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination
              component is used to navigate between a set of search results, an appropriate label
              could be <code>aria-label=&#34;Search results pages&#34;</code>.
            </p>
            <DocsExample href="components/pagination">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Paginations
