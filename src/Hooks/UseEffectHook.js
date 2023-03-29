import React, { useEffect, useState } from 'react'



function UseEffectHook() {
    const [ userData, setUserData ] = useState([]);

    //componentDidMount, componentDidUpdate, componentDidUnmount

    //useEffect will take two arguments
    //call back function
    //dependancy array

    //if you are not passing the depandancy array, the useeffect will be called when the state is updated
    //if you pass the depandancy array as an empty array, the use effect will be called for the first time the 
    // component is mounted on the DOM
    
    useEffect(()=>{
        getUserData();
    },[])

    const getUserData = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUserData(data);
    }


  return (
    <>
        <h2>UseEffectHook</h2>
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
                {userData.length>0 ? (
                    userData.map((user)=>(
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
    </>
  )
}

export default UseEffectHook