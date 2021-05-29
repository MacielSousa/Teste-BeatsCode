import React from 'react';

const Post = () => {
    return (
        <article>
            <header>
                <div class="post-section">
                    <a target="_blank" class="icon">
                        <picture>
                            <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286928.6604_uTYgug_100x100.jpg" loading="lazy" />
                        </picture>
                    </a> 
                    
                    <p class="message">
                        <a target="_blank" class="section">
                            Gaming
                        </a>  · 3h
                    </p>
                </div>
                
                <a href="/gag/aYyZKMN" target="_blank">
                    <h1>I’m this old.</h1>
                </a>
            </header>
            
            <div class="post-container">
                <a href="/gag/aYyZKMN" target="_blank" class="badge-evt badge-track" style={{ minHeight: 375 }}>
                    <img src="https://img-9gag-fun.9cache.com/photo/aYyZKMN_460s.jpg" alt="I’m this old." loading="lazy" style={{minHeight: 375}} />
                </a>
            </div>
            
            <p class="post-meta">
                <a href="/gag/aYyZKMN" target="_blank" class="point badge-evt">3,345 points</a> ·
                <a href="/gag/aYyZKMN#comment" target="_blank" class="comment badge-evt">354 comments</a>
            </p>
            
            <div class="post-afterbar-a in-list-view">
                <ul class="btn-vote left">
                    <li><a href="javascript:void(0);" class="up"><span>UP</span></a></li>
                    <li><a href="javascript:void(0);" class="down"><span>DOWN</span></a></li>
                </ul>
                
                <ul class="btn-vote left">
                    <li><a target="_blank" href="/gag/aYyZKMN#comment" class="comment badge-evt">Comment</a></li>
                </ul>

                <div>
                    <ul class="btn-vote left">
                        <a href="javascript:void(0);" class="more">More</a>
                    </ul>
                </div>     
            </div>
            
            <div class="clearfix"></div>
        </article>
    );
}


export default Post;