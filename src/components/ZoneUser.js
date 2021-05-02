import React from 'react';
import ListeUser from './ListeUser';
import {apiUser} from '../components/Api';

function ZoneUser({viewuser}) {
    const [users, setUsers] = React.useState([]);


    const fetchUsers = async () => {
        let data = await apiUser.get('/user/all').then(({data}) => data)
        .catch((e) => alert(e.message));
        setUsers(data);
    }

    React.useEffect(()=> {
        fetchUsers();
    }, [])


    return (
        <div className="main_body" id="main_body">
            <div className="col1">
                <div className='user_header'>
                    Utilisateurs:
                </div>
                <ListeUser users={users} viewuser={viewuser} />
            </div>
            
        </div>
    )
    
}

export default ZoneUser;