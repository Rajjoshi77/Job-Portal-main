// job.js

import axios from 'axios';

const API_BASE_URL = '${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/jobs'; // Replace this with your actual API endpoint

export const fetchJobs = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addJob = async (jobData) => {
    try {
        const response = await axios.post(API_BASE_URL, jobData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteJob = async (jobId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${jobId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
