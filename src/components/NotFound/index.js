// Write your code here
import ThemeContext from '../../context/ThemeContext'

import NavBar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const isDark = isDarkTheme
        ? `not-found-container`
        : `not-found-container1`
      return (
        <div className={isDark}>
          <NavBar />
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="not-found-img"
          />
          <h1>Lost Your Way?</h1>
          <p>We cannot seem to find the page your looking for.</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
