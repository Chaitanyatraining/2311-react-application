import React, { Component } from 'react'

export class LifeCycleMethods extends Component {
    constructor(){
        super()
        console.log("constructor executed")
    }

    state = {
        userData :[]
    }

    static getDerivedStateFromProps(props,state){
        console.log("static getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
       this.getUserData()
    }

    getUserData = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        this.setState({userData:data})
    }

   
  render() {
    console.log("render method executed");
    return (
      <div>
        <h2>LifeCycleMethods</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>userName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {this.state.userData.length>0 ? (
                    this.state.userData.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                )  : <p>loading</p>}

            </tbody>
        </table>
      </div>
    )
  }
}

export default LifeCycleMethods