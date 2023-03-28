import React, { Component } from 'react'

export class Pagination extends Component {
        state = {
            pageNumber:0,
            userData : []
        }

        componentDidMount(){
            this.getUserData();
        }

        getUserData = async ()=>{
            const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
            {
                method:"GET",
                headers:{
                    "app-id": "633e33e98efd49504c9c7643 "
                }
            }
            )
            const {data} = await response.json();
            this.setState({userData:data})
        }

        handleBtnclick = (num) =>{
            this.setState({pageNumber:num});
        }

        componentDidUpdate(prevsProps,prevsState){
            // when the state are props is updated (componentDidUpdate wil be called)
            if(prevsState.pageNumber !== this.state.pageNumber){
                this.getUserData();
            }
        }


  render() {
    return (
      <div>
        <h2>Pagination</h2>
        {
            this.state.userData.length>0 ? (
                <div className='container'>
                    <div className='row'> 
                        {
                             this.state.userData.map((user)=>(
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
                        <button className='btn btn-primary m-3'
                        onClick={()=>{this.handleBtnclick(num)}}
                        >{num}</button>
                    ))}
                </div>   
            ) : (<p>loading</p>)
        }
      </div>
    )
  }
}

export default Pagination