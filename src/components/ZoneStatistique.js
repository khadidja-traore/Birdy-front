import React from 'react';
import '../styles/ZoneStatistique.css';

class ZoneStatistique extends React.Component {

    constructor(props) {
        super(props); //recoit le texte du message en propriété
    }

    render() {
        const { author_id, author_name, date, text, _id } = this.props;

        return (
            <div className='statistic_container'>
                <div className='header_area'>
                    <div className='header_content'>Statistique</div>
                </div>
                <div className='stats_row_1'>
                    <div className='row_1_col_1'>Tweets:</div>
                    <div className='row_1_col_2'>121</div>
                </div>
                <div className='stats_row_2'>
                    <div className='row_1_col_1'>Following:</div>
                    <div className='row_1_col_2'>23</div>
                </div>
                <div className='stats_row_3'>
                    <div className='row_1_col_1'>Followers:</div>
                    <div className='row_1_col_2'>24</div>
                </div>
            </div>
        )
    }

}

export default ZoneStatistique;