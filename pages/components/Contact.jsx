import React, { useRef, useState } from 'react'
import Hero from './Hero'


export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isFormEmpty, setIsFormEmpty] = useState('');




    
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbw2bW9IH2wawww2t08OFFG54SlHK94l0E0h_wtn7q35li-7W5Ut8kRr-k_jPUGeHhMe1g/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
            .catch(err => console.log(err))

            setName('');
            setSubject('');
            setEmail('');
            setMessage('');
    }


    return (

        <div className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 id="contact" className='text-2xl font-bold text-center p-4'>Let's work together</h1>
            <form
                method="post"
                ref={formRef}
                onSubmit={handleSubmit}
                name="google-sheet"
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

export default Form