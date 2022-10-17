import Link from 'next/link';
import React, { useRef, useState } from 'react'
import Hero from './Hero'


export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [helpMessage, setHelpMessage] = useState('');
    const [insurance, setInsurance] = useState('');
    const [description, setDescription] = useState('');
    const [isFormEmpty, setIsFormEmpty] = useState('');





    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzL5gf4EUgqlA9iTaln8XYQD9b1iab3GjcAKmjgH9LxflpdG6uRRUXCeYSirjOwc78J/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()

        setLoading(true)


        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            setIsFormEmpty("FORM SUBMITTED SUCCESSFULLY")
            console.log("SUCCESSFULLY SUBMITTED")
            
            setLoading(false)
        })
            .catch(err => console.log(err))


        setName('');
        setEmail('');
        setAddress('');
        setPhone('');
        setHelpMessage('');
        setInsurance('');
        setDescription('');

    }


    return (

        <div id='contact' className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 className='text-2xl font-bold text-center p-4'>Let&apos;s work together</h1>
            <form
                method="post"
                action={scriptUrl}
                ref={formRef}
                onSubmit={handleSubmit}
                name="google-sheet"
                className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    <input
                        className='border shadow-lg p-3'
                        name="name"
                        type="text"
                        required
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input
                        className='border shadow-lg p-3'
                        name="email"
                        type="email"
                        required
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div
                    className='grid grid-cols-2 gap-2'>
                    <input
                        className='border shadow-lg p-3 w-full my-2'
                        name="address"
                        type="text"
                        required
                        placeholder='Address'
                        value={address}
                        onChange={e => setAddress(e.target.value)} />
                    <input
                        className='border shadow-lg p-3 w-full my-2'
                        name="phone"
                        type="number"
                        required
                        placeholder='Phone Number'
                        value={phone}
                        onChange={e => setPhone(e.target.value)} />
                </div>
                <input
                    className='border shadow-lg p-3 w-full my-2'
                    name="helpMessage"
                    type="text"
                    placeholder='How can we help?'
                    value={helpMessage}
                    onChange={e => setHelpMessage(e.target.value)} />

                <input
                    className='border shadow-lg p-3 w-full my-2'
                    name="insurance"
                    type="text"
                    placeholder='Insurance Policy or Company'
                    value={insurance}
                    onChange={e => setInsurance(e.target.value)} />

                <textarea
                    className='border shadow-lg p-3 w-full'
                    name="description"
                    type='text'
                    cols="30" rows="10"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)} />

                <p
                    className="p-4 text-green-500 align-middle text-center font-bold">{isFormEmpty}</p>

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