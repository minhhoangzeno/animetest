import React from 'react'
import Cartoon from '../home-video/Cartoon';
import Manga from '../home-video/Manga';
import Picked from '../home-video/Picked';
export default function DetailVideo() {
    return (
        <div className='section container-video'>
            <div className='container-video main-detail'>
                <div className='player'>
                    <div className='player__main'>
                        <div className='player__main--video'>
                            <iframe className='hero-player' src="https://www.youtube.com/embed/ZwcAcjmuodM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="player-meta">
                                <h1 className="film-info-title">Gotoubun no Hanayome Tập 9 </h1>
                                <div className="film-info-views">
                                    <span>2,077,016 lượt xem</span>
                                </div>

                                <div className="film-info-action">
                                    <a href="#" target="_blank">
                                        <div className="film-info-share">
                                            <svg width='24' height='24' viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
                                            </svg>
                                            <span>Share</span>
                                        </div>
                                    </a>

                                    <div className="film-info-like" data-liked="0">
                                        <svg width='24' height='24' viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                                        </svg>
                                        <span className="film-like-label">thích</span>
                                        <span className="count-box">4,771</span>
                                    </div>

                                    <div className="film-info-follow" data-following="0">
                                        <svg width='24' height='24' viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
                                        </svg>
                                        <span className="film-follow-label">theo dõi</span>
                                        <span className="count-box">4,663</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='player__main--content'>

                        </div> */}
                    </div>
                    <div className='player__sidebar'>

                    </div>
                </div>
            </div>
            <Cartoon />
            <Manga />
            <Picked />
        </div>
    )
}
