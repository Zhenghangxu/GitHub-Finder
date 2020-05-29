import React from 'react'
import UserItem from "./UserItem";
import PropTypes from "prop-types";
import {Spinner} from "../layout/spinner"

const Users=(props)=>{
    if (props.loading) {
      return <Spinner></Spinner>
    } else {
      return(
        <div style={userStyle}>
        {props.users.map(user=>(
          <UserItem key={user.id} user={user}></UserItem>
        ))}
        </div>
      )
    }
}
// propType
Users.propTypes = {
  users:PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired,
}

// style
const userStyle = {
  display: "grid",
  gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',
  columnGap:"1rem",
  padding:"0 1rem"
}



export default Users
