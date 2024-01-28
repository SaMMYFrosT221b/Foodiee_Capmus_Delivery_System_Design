import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://github.com/SaMMYFrosT221b/Foodiee_Capmus_Delivery_System_Design" target="_blank" rel="noopener noreferrer">
          Foodiee
        </a>
        <span className="ms-1">&copy; 2024 AnRaNi.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1"> Group 16 </span>
        <a href="https://github.com/SaMMYFrosT221b/Foodiee_Capmus_Delivery_System_Design" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
