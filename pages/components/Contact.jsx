import emailjs from "emailjs-com"
import React, { useRef, useState } from 'react'
import Hero from './Hero'

export const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isFormEmpty, setIsFormEmpty] = useState('');



    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (name && email) {
            emailjs.sendForm('gmail', 'template_fodsg2u', form.current, 'pBshowc_Ps9mUDt72')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                setIsFormEmpty('')
        }
        
        else{
            setIsFormEmpty("PLEASE Fill OUT NAME AND EMAIL BEFORE SUBMITTING THE FORM")
        }


        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
        

    };




    return (
        
        <div className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 id="contact" className='text-2xl font-bold text-center p-4'>Let's work together</h1>
            <form
                ref={form}
                onSubmit={sendEmail}
                className='max-w-[600px] m-auto'>

                <div className='grid grid-cols-2 gap-2'>
                    <input
                        className='border shadow-lg p-3'
                        name="name"
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input
                        className='border shadow-lg p-3'
                        name="email"
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <input
                    className='border shadow-lg p-3 w-full my-2'
                    name="subject"
                    type="text"
                    placeholder='Subject'
                    value={subject}
                    onChange={e => setSubject(e.target.value)} />
                <textarea
                    className='border shadow-lg p-3 w-full'
                    name="message"
                    cols="30" rows="10"
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)} />
                <p 
                    className="p-4 text-red-600">{isFormEmpty}</p>
                <input
                    className='border shadow-lg p-3 w-full mt-2 hover:shadow-black'
                    value="Send"
                    type='submit'
                />
            </form>
        </div>
        

    )
}


export default ContactUs