import React from 'react';
// import './Food.css';
// import ReactPlayer from 'react-player';

const Food = ( { launch } ) => {
   
    return (
        <div className='launch'>
            <div className='launch-data'>
                <p>Mission Name : { launch.mission_name }</p>
                <p>Food Year : { launch.launch_year }</p>
                <p>Rocket Name : { launch.rocket.rocket_name }</p>
                <p>Rocket Type : { launch.rocket.rocket_type }</p>
                <p>Food Site Name : { launch.launch_site.site_name_long }</p>
                <p>Payloads Nationality : { launch.rocket.second_stage.payloads[0].nationality }</p>
                <p>Payloads Type : { launch.rocket.second_stage.payloads[0].payload_type }</p>                   
                {/* <ReactPlayer url={ launch.links.video_link } controls width='90%' /> */}
                {/* <div className='links-controls'>
                    <button className='wiki'><a href={ launch.links.wikipedia } target='_blank'></a></button>
                    <button className='article'><a href={ launch.links.article_link } target='_blank'></a></button>
                </div> */}
                
                
            </div>
        </div>    
        )
    }

export default Food;