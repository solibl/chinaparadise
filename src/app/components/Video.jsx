import React from 'react';

class Video extends React.PureComponent {
    render () {
        return (
            <div>
                <video className="video" autoPlay loop muted preload="auto" width="100%" height="50%" data-setup="{}">
                    <source src="https://s3-us-west-1.amazonaws.com/chinaparadise/China_Paradise.mp4" type='video/mp4'/>        
                </video>
            </div>
            )
    };
}

export default Video;