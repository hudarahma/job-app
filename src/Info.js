import React from 'react';
import './Info.css'
import { Link } from 'react-router-dom'

function Info() {
    return (
        <div className='info__container'>
            <div className='wrapper_info'>
                <div className='company_site'>
                    <img />
                    <div className='center_info'>
                        <h2>So Digital Inc.</h2>
                        <h4>sodigital.co</h4>
                    </div>
                    
                    <button>Company Site</button>
                </div>

                <div className='company_info'>
                    <div className='company_info_header'>
                        <div className='info'>
                            <h4>1w ago . Part Time</h4>
                            <h1>Senior Software Engineer</h1>
                            <h3>Remote, Seoul, Tokyo, Mountain View, San Fransisco</h3>
                        </div>
                        
                        <button>Apply Now</button>
                    </div>

                    <div className='company_info_body'>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>

                        <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                        <h3>See more about our teams here</h3>

                        <h2>Requirements</h2>
                        <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                        </p>
                        <ul>
                            <li>Morbi interdum mollis sapien. Sed</li>
                            <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
                            <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
                            <li>Morbi interdum mollis sapien. Sed</li>
                        </ul>
                        <h2>What You Will Do</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.

                         Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                        <ol>
                            <li>Morbi interdum mollis sapien. Sed</li>
                            <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
                            <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
                            <li>Morbi interdum mollis sapien. Sed</li>
                        </ol>
                    </div>

                    <div className='how_to_apply'>
                        <span>How to Apply</span>
                        <span>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus.</span>

                        <Link to='https://examplelink.com/how-to-apply'>https://examplelink.com/how-to-apply</Link>
                    </div>

                   
                </div>
            </div>
            
        </div>
    )
}

export default Info
