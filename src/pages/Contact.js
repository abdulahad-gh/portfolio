import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from './shared/PageTitle';

const Contact = () => {

    const serviceId = 'service_x0m52ms';
    const templateId = 'template_5up0aml';
    const [error, setError] = useState('')

    const handleUserMessage = e => {
        e.preventDefault();
        if (e.target.name.value == '' || e.target.email.value == '' || e.target.phone.value == '' || e.target.message.value == '') {
            setError('every field must be complete')
            e.target.reset()
            return

        }


        emailjs.sendForm(serviceId, templateId, e.target, 'K4BMxB-cRmdltHEER')
            .then((result) => {
                setError('')
                toast.success('successfully send email')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    };
    return (
        <div className=' px-2 h-screen flex items-center justify-center'>
            <div>
                <PageTitle title="contact me" content="contact with web developer or react developer abdul ahad" linksrc='/contact' />

                <h2 className='text-2xl text-center '>Contact Me </h2>

                <div className='mt-20 flex flex-col  lg:flex-row justify-center gap-4'>

                    <form className='flex flex-col max-w-80 lg:w-80 gap-3' onSubmit={handleUserMessage}>
                        <input type="text" name='name' placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="tel" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <textarea type="text" name='message' placeholder="Enter Your need message" class="input input-bordered w-full max-w-xs h-20 leading-tight pt-1" />

                        <input className='btn btn-accent btn-sm w-full max-w-xs' type="submit" value="Send Email" />
                        {error && <span className='text-red-500'>{error}</span>}
                    </form>
                    <img className='w-80 rounded-lg' src="https://i.ibb.co/94FYcyH/contact-me-illustration-vector.jpg" alt="" />
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Contact;