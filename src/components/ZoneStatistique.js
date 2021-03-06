import React from 'react';
import '../styles/ZoneStatistique.css';
import { apiMessage } from './Api';

const ZoneStatistique = ({ twittCount }) => {
    // const [followingCount, setFollowingCount] = React.useState(0);
    // const [followersCount, setFollowersCount] = React.useState(0);

    return (
        <div className='statistic_container'>
            <div className='header_area'>
                <div className='header_content'>Statistique</div>
            </div>
            <div className='stats_row_1'>
                <div className='row_1_col_1'>Tweets:</div>
                <div className='row_1_col_2'>{twittCount}</div>
            </div>
            <div className='stats_row_2'>
                <div className='row_1_col_1'>Following:</div>
                {/* <div className='row_1_col_2'>{followingCount}</div> */}
                <div className='row_1_col_2'>0</div>
            </div>
            <div className='stats_row_3'>
                <div className='row_1_col_1'>Followers:</div>
                {/* <div className='row_1_col_2'>{followersCount}</div> */}
                <div className='row_1_col_2'>0</div>
            </div>
        </div>
    )
}

export default ZoneStatistique;