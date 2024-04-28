import NavBar from '@/components/NavBar_Company';
import Select from 'react-select';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { post_job } from '@/Services/job';
import { useRouter } from 'next/router';

export default function PostAJob() {
    const user = useSelector(state => state.User.userData);
    const router = useRouter();

    const [formData, setFormData] = useState({
        user: user?._id || '',
        title: '',
        salary: 0,
        email: '',
        company: '',
        description: '',
        job_category: '',
        job_type: '',
        job_experience: '',
        pin_number: '',
        job_vacancy: 0,
        job_deadline: '',
        Interview_date: '',
        Interview_time: '',
        address: ''
    });

    const [error, setError] = useState({
        user: '',
        title: '',
        salary: '',
        email: '',
        company: '',
        description: '',
        job_category: '',
        job_type: '',
        job_experience: '',
        pin_number: '',
        job_vacancy: '',
        job_deadline: '',
        Interview_date: '',
        Interview_time: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const validationError = {};
        const requiredFields = ['title', 'salary', 'email', 'company', 'pin_number', 'description', 'job_category', 'job_type', 'job_experience', 'job_vacancy', 'job_deadline', 'Interview_date', 'Interview_time', 'address'];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                validationError[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} field is required`;
            }
        });

        if (Object.keys(validationError).length > 0) {
            setError(validationError);
            return;
        }

        if (!formData.user) {
            return toast.error('Please Login First');
        }

        const res = await post_job(formData);

        if (res.success) {
            toast.success(res.message);
            setTimeout(() => {
                router.push('/')
            }, 1000);
        } else {
            toast.error(res.message);
        }
    };

    const options = [
        { value: 'fulltime', label: 'Full Time' },
        { value: 'parttime', label: 'Part Time' },
        { value: 'internship', label: 'Internship' },
        { value: 'contract', label: 'Contract' }
    ];

    return (
        <>
            <NavBar />
            <div className='w-full py-20 flex items-center justify-center flex-col'>
                <h1 className='text-xl mt-4 uppercase tracking-widest border-b-2 border-b-indigo-600 py-2 font-semibold mb-8 md:text-2xl lg:text-4xl'>Enter Job Details</h1>
                <form onSubmit={handleSubmit} className="sm:w-1/2 w-full px-4 mx-4  h-full">
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="title" className='mb-1 text-base font-semibold'>Title :</label>
                        <input onChange={handleChange} type="text" id='title' name='title' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {error.title && <p className="text-sm text-red-500">{error.title}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="salary" className='mb-1 text-base font-semibold'>Salary :</label>
                        <input onChange={handleChange} type="number" id='salary' name='salary' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter Salary for this job' />
                        {error.salary && <p className="text-sm text-red-500">{error.salary}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="email" className='mb-1 text-base font-semibold'>Email :</label>
                        <input onChange={handleChange} type="email" id='email' name='email' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter Email to be Contacted for this job' />
                        {error.email && <p className="text-sm text-red-500">{error.email}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="company" className='mb-1 text-base font-semibold'>Company :</label>
                        <input onChange={handleChange} type="text" id='company' name='company' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter Company of job' />
                        {error.company && <p className="text-sm text-red-500">{error.company}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="pin_number" className='mb-1 text-base font-semibold'>Pin Code :</label>
                        <input onChange={handleChange} type="number" id='pin_number' name='pin_number' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter your 6-digit Pin code' pattern="[0-9]{6}" />
                        {error.pin_number && <p className="text-sm text-red-500">{error.pin_number}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="description" className='mb-1 text-base font-semibold'>Description :</label>
                        <textarea onChange={handleChange} type="text" id='description' name='description' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter description of job' />
                        {error.description && <p className="text-sm text-red-500">{error.description}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="job_category" className='mb-1 text-base font-semibold'>Job Category :</label>
                        <input onChange={handleChange} type="text" id='job_category' name='job_category' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter Category of job' />
                        {error.job_category && <p className="text-sm text-red-500">{error.job_category}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label className='mb-1 text-base font-semibold'>Job Type :</label>
                        <Select onChange={(selectedOption) => setFormData({ ...formData, job_type: selectedOption.value })} options={options} />
                        {error.job_type && <p className="text-sm text-red-500">{error.job_type}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="job_experience" className='mb-1 text-base font-semibold'>Job Experience :</label>
                        <input onChange={handleChange} type="text" id='job_experience' name='job_experience' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter Experience Required for this job' />
                        {error.job_experience && <p className="text-sm text-red-500">{error.job_experience}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="job_vacancy" className='mb-1 text-base font-semibold'>Job Vacancy :</label>
                        <input onChange={handleChange} type="number" id='job_vacancy' name='job_vacancy' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter Number of Vacancies' />
                        {error.job_vacancy && <p className="text-sm text-red-500">{error.job_vacancy}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="Interview_date" className='mb-1 text-base font-semibold'>Interview Date :</label>
                        <input onChange={handleChange} type="date" id='Interview_date' name='Interview_date' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter Interview Date' />
                        {error.Interview_date && <p className="text-sm text-red-500">{error.Interview_date}</p>}
                    </div>
                    <div className='w-full mb-4 flex flex-col items-start justify-center'>
                        <label htmlFor="Interview_time" className='mb-1 text-base font-semibold'>Interview Time :</label>
                        <input
                            onChange={handleChange}
                            type="time"
                            id='Interview_time'
                            name='Interview_time'
                            className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded'
                            placeholder='Enter Interview Time'
                            pattern="(?:[01]\d|2[0-3]):(?:[0-5]\d)" // Pattern for 24-hour format
                        />
                        {error.Interview_time && <p className="text-sm text-red-500">{error.Interview_time}</p>}
                    </div>


                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="address" className='mb-1 text-base font-semibold'>Address :</label>
                        <input onChange={handleChange} type="text" id='address' name='address' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter address of company' />
                        {error.address && <p className="text-sm text-red-500">{error.address}</p>}
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="job_deadline" className='mb-1 text-base font-semibold'>Job Deadline :</label>
                        <input onChange={handleChange} type="date" id='job_deadline' name='job_deadline' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter Deadline of job' />
                        {error.job_deadline && <p className="text-sm text-red-500">{error.job_deadline}</p>}
                    </div>
                    <button type="submit" className='w-full py-2 rounded bg-indigo-600 text-white font-semibold tracking-widest'>Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}
