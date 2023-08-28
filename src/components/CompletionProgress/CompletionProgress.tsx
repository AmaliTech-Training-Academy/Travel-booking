import React from 'react'
import "./completionprogress.scss"

const CompletionProgress = () => {
  return (
    <div className='completion-progress'>
        <div className="profile-progress">
          <div className="profile-steps">
            <p>1</p>
            <h6>Detail</h6>
            <div className="line"></div>
          </div>
          <div className="profile-steps">
            <p>2</p>
            <h6> Step</h6>
            <div className="line"></div>
          </div>
          <div className="profile-steps">
            <p>3</p>
            <h6>Pay</h6>
            <div className="line-last"></div>
          </div>
        </div>
    </div>
  )
}

export default CompletionProgress