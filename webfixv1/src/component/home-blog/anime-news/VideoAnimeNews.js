import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { searchVideoByCategory } from '../../../utils/searchVideoByCategory';
export default function VideoAnimeNews() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchVideoByCategory('Tin Anime', 5);
        setVideos(data)
    }
    return (
        <>
            {videos.length > 0 &&
                <div className='anime-news__right--video collumn-medium'>
                    {videos?.map((video, index) => {
                        return (
                            <a href='#' target='blank' key={index} >
                                <div className='item__video'>
                                    <div className='thumbnail__video'>
                                        <Image unoptimized loader={() => { return `${video?.photoURL}` }} src={video?.photoURL} width='300' height="225" />
                                        <div className="section-video-item-play">
                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='content__video'>
                                        <a href='#'>
                                            <h3 className="video-item-title">{video.title}</h3>
                                        </a>
                                        <span className="video-item-date">
                                            {video.createdDate.toDate().toLocaleString('vi')}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            }

        </>
    )
}