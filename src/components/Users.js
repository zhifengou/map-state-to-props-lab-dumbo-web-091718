import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {
<<<<<<< HEAD

  render() {
    let users = this.props.users.map((u,index)=>{ return <li key={index}>{u.username}</li>})
=======
  let users = this.props.users.map((u,index)=>{ return <li key={index}>{u.username}</li>})
>>>>>>> d24eddba766d28faaa1da07dbf40da3056186f90
    return (
      <div>
        <ul>
          {users}
        </ul>
        <p>Total: {users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state)=>{
  return {users: state.users}
}
<<<<<<< HEAD
export default connect(mapStateToProps)(Users)
=======
export default Users
>>>>>>> d24eddba766d28faaa1da07dbf40da3056186f90
