import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { firestore } from '../../utils/firebaseInit';
import Link from 'next/link';
import { convertUrlSlug } from '../../utils/RegexUrl';
import { getElementsArray } from '../../utils/ElementsArray';
export default function VideoManga({ videoId }) {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        search()
    }, [videoId])
    const search = async () => {
        try {
            let filter = firestore
                .collection("Video")
                .where("category.title", "==", "Truyện tranh")
                .orderBy("createdDate", "desc")
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            let data = resp.filter(item => item.id !== videoId);
            setVideos(getElementsArray(data, 6))
        } catch (error) {

        }
    }
    return (
        <section className='tray manga'>
            <div className='tray__title'>
                <a className="" href="#" target='_blank'>
                    <h1>Truyện tranh</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </a>
            </div>
            <div className='tray__content manga__wrapp'>
                {videos?.length > 0 && videos.map((video, index) => {
                    return (
                        <Link href={`/video/${convertUrlSlug(video.title.substring(0, 35))}-${video.id}`} key={index} >
                            <div className="manga__wrap--item" style={{ cursor: 'pointer' }} >
                                {video?.photoURL ? <Image unoptimized loader={() => { return `${video?.photoURL}` }} src={video?.photoURL} width='220' height="325" />
                                    : <Image src={require('../../images/item.jpg')} width='220' height="325" />
                                }
                                <div className="manga-item-title">{video?.title}
                                </div>
                                <div className="manga-item-meta-info">
                                    <span className="manga-item-label">
                                        {video?.views} lượt xem
                                    </span>
                                </div>
                            </div>
                        </Link>

                    )
                })}
            </div>
        </section>
    )
}
