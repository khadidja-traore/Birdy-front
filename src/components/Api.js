import axios from 'axios';

//axios.defaults()
export const apiUser = axios.create({
	baseURL : 'http://localhost:4000/apiUser/',
	timeout : 1000,
	headers : {}
	});

export const apiFriend = axios.create({
    baseURL : '/apiFriend/',
    timeout : 1000,
    headers : {'X-Custom-Header' : 'foobar'}
    });
    
    
export const apiMessage = axios.create({
    baseURL : '/apiMessage/',
    timeout : 1000,
    headers : {'X-Custom-Header' : 'foobar'}
    });
        
 