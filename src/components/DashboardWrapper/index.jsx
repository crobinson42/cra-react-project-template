import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './index.css'

const DashboardWrapper = ({ children }) => (
  <div>
    <Navbar />

    <div className="d-flex">
      <Sidebar />

      <main>{children}</main>
    </div>
  </div>
)

DashboardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
DashboardWrapper.defaultProps = {}

export default DashboardWrapper
