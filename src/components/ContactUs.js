import React ,{Component} from 'react'

class ContactUs extends React.Component {

    state = {
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
        firstNameErr:"",
        lastNameErr:"",
        EmailErr:"",
        phoneErr:""
    }

     handleSubmit = (e)=>{
        e.preventDefault();
        
        let firstNameErr = "";
        let lastNameErr = "";
        let EmailErr = "";
        let phoneErr = "";
        
        if(this.state.firstName.length<4){
            firstNameErr = "firstName should be atleast 4 characters"
        }

        if(this.state.lastName.length<1){
            lastNameErr="lastName should atleast have 1 character"
        }

        if(!this.state.email.includes('@')){
            EmailErr = "Enter a valid Email"
        }

        if(this.state.phone.length!= 10){
            phoneErr="please Enter a valid phone number"
        }
 
        if(firstNameErr || lastNameErr || EmailErr || phoneErr){
            this.setState({firstNameErr, lastNameErr, EmailErr, phoneErr})
        }else{
            this.setState({firstNameErr, lastNameErr, EmailErr, phoneErr})
        }
    }

     handleChange = (e)=>{
       const {name,value} = e.target;
       this.setState({[name]:value})
       console.log(this.state)
    }

    // validation
    // firstName >4
    // lastName >1
    // email include "@"
    // phone should be 10 digits

render(){
  return (
    <div>
        <h2>ContactUs</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <form>
                        <input type="text" name="firstName" value={this.state.firstName}  className='form-control mt-2' onChange={this.handleChange} placeholder='Enter your firstName' />
                        <p className='text-danger'>{this.state.firstNameErr}</p>
                        <input type="text" name="lastName" value={this.state.lastName} className='form-control mt-2' onChange={this.handleChange} placeholder='Enter your lastName' />
                        <p className='text-danger'>{this.state.lastNameErr}</p>
                        <input type="text" name="email" value={this.state.email} className='form-control mt-2' onChange={this.handleChange} placeholder='Enter your email' />
                        <p className='text-danger'>{this.state.EmailErr}</p>
                       <input type="text" name="phone" value={this.state.phone} className='form-control mt-2' onChange={this.handleChange} placeholder='Enter your mobile' />
                       <p className='text-danger'>{this.state.phoneErr}</p>
                        <button className='btn btn-primary my-3' onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    </div>
  )
}
}

export default ContactUs