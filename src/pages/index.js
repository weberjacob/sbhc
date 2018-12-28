import React from "react"
import './index.scss'

const homePage = () => (
  <div className="homePage">
    <div className="inner">
      <img alt="She Bakes He Cooks" src={require('../images/Logo.png')} />
      <p>Something new is in the works, stay tuned for more.</p>
    </div>
  </div>
)

export default homePage;
