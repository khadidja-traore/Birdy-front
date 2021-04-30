import React from 'react';
import '../styles/Friend.css';

class Friend extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { friend_id, friend_name } = this.props;

        return (
            <div className='friend_container'>
                <div className='friend_user_icon_col'>
                    <div className='other_user_icon'></div>
                </div>
                <div className='friend_name_col'>
                    <div className='friend_name'>{friend_name}</div>
                    <div className='friend_id'>{friend_id}</div>
                </div>
            </div>
        )
    }

}

export default Friend;