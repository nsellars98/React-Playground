import Button from "./Button"
import PropTypes from 'prop-types'
import React from "react"

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  }

  return (
    <header className="header">
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
  // styles here
// }

export default Header