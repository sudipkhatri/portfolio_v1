import './Contact.css';
import emailjs from 'emailjs-com'
import { useState } from 'react';

const Contact = () =>{
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');


    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            'Gmail_1$',
            'template_ym8effo',
            e.target,
            'user_2N3VFzAvNtdbdnvCq6DNd'
        ).then(res=>{
            alert('Message Sent');
            setName('');
            setEmail('');
            setMessage('');
            console.log(res)
        }
        ).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className = "Contact_container" id = "contact">
            <div className = "contact">
            <h1> Get In Touch </h1>
            <form className = "Form"  method="post" onSubmit = {sendEmail}>
                <input  
                type = "text"
                name = "FullName" 
                value = {name} 
                onChange = {(e)=>setName(e.target.value)}
                placeholder = "Enter Your Full Name.." 
                required/>
                <input 
                type = "email"
                name = "Email"
                value = {email}  
                onChange = {(e)=>setEmail(e.target.value)}
                placeholder = "Enter Your Email.." 
                required/>
                <textarea 
                type = "textArea" 
                value = {message} 
                onChange = {(e)=>setMessage(e.target.value)}
                name = "Description" 
                placeholder = "Enter Your Message.." 
                required/>
                <button type = "submit"> Submit </button>
            </form>
            </div>
            

        </div>


    )

}

export default Contact;