import axios from 'axios';

//axios.defaults()
export const apiUser = axios.create({
	baseURL : 'http://localhost:4000/apiUser/',
	timeout : 1000,
	headers : {},
    withCredentials: true
	});

export const apiFriend = axios.create({
    baseURL : 'http://localhost:4000/apiFriend/',
    timeout : 1000,
    headers : {},
    withCredentials: true
    });
    
    
export const apiMessage = axios.create({
    baseURL : 'http://localhost:4000/apiMessage/',
    timeout : 100000,
    headers : {},
    withCredentials: true
    });
        
 