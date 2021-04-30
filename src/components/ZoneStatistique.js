import React from 'react';
import '../styles/ZoneStatistique.css';
import { apiMessage } from './Api';

// class ZoneStatistique extends React.Component {

//     constructor(props) {
//         super(props); //recoit le texte du message en propriété
//     }

//     render() {
//         const { author_id, author_name, date, text, _id } = this.props;

//         return (
//             <div className='statistic_container'>
//                 <div className='header_area'>
//                     <div className='header_content'>Statistique</div>
//                 </div>
//                 <div className='stats_row_1'>
//                     <div className='row_1_col_1'>Tweets:</div>
//                     <div className='row_1_col_2'>121</div>
//                 </div>
//                 <div className='stats_row_2'>
//                     <div className='row_1_col_1'>Following:</div>
//                     <div className='row_1_col_2'>23</div>
//                 </div>
//                 <div className='stats_row_3'>
//                     <div className='row_1_col_1'>Followers:</div>
//                     <div className='row_1_col_2'>24</div>
//                 </div>
//             </div>
//         )
//     }

// }

const ZoneStatistique = () => {
    const [twittCount, setTwittCount] = React.useState(0);
    const [followingCount, setFollowingCount] = React.useState(0);
    const [followersCount, setFollowersCount] = React.useState(0);

    const fetchTwittCount = async () => {
        let data = await apiMessage.get('/message').then(({data}) => data);
        var tmp_twittCount = data.length;
        console.log(tmp_twittCount);
        setTwittCount(data.length);
        // var sorted_data = data.sort((a,b) => {
        //     return new Date(a.date).getTime() - 
        //         new Date(b.date).getTime()
        // }).reverse();
        // setMessages(sorted_data);
    } 

    React.useEffect(() => {
        fetchTwittCount();
    }, [])

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
                <div className='row_1_col_2'>{followingCount}</div>
            </div>
            <div className='stats_row_3'>
                <div className='row_1_col_1'>Followers:</div>
                <div className='row_1_col_2'>{followersCount}</div>
            </div>
        </div>
    )
}

export default ZoneStatistique;