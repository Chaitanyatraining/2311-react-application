import React, { useEffect, useState } from 'react'

 const PaginationUseEffect = () => {
    // useState
    const [pageNumber,setPageNumber] = useState(0)
    const [userData,setUserData] = useState([])

    useEffect(()=>{
        getUserData();
    },[pageNumber])

    const getUserData = async ()=>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
        {
            method:"GET",
            headers:{
                "app-id": "633e33e98efd49504c9c7643 "
            }
        })
        const {data} = await response.json();
        setUserData(data)
    }

  return (
    <>
        <h2>PaginationUseEffect</h2>
        {
            userData.length>0 ? (
                <div className='container'>
                    <div className='row'> 
                        {
                             userData.map((user)=>(
                                <div key={user.id} className='col-md-6 mt-3'>
                                   <div  className='card p-3'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <img src={user.picture} alt={user.firstName} />
                                            </div>
                                            <div className='col-md-8'>
                                                <h5>{user.id}</h5>
                                            </div>
                                            <strong>
                                                {user.title} {user.firstName} {user.lastName}
                                            </strong>
                                        </div>
                                   </div>
                                </div>
                        ))
                        }
                    </div>
                    {[1,2,3,4,5,6,7,8,9].map((num)=>(
                        <button className='btn btn-primary m-3' onClick={()=>setPageNumber(num)}>{num}</button>
                    ))}
                </div>   
            ) : (<p>loading</p>)
        }
    </>
  )
}

export default PaginationUseEffect
