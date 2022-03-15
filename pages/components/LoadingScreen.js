import React from 'react'

const LoadingScreen = () => {
  return (
    <div className="ring-outer"> 
      <div className="ring">
      <img src="/assets/images/logo.png" height="100" width="100" className="loader-logo" />      
      {/* <image src="logo.png" height="100" width="100"/> */}
      <div className="loaderk"></div>
      </div>
    </div>
  )
}

export default LoadingScreen