import React from 'react'
import All from '../src/component/home-video/All';
import Cartoon from '../src/component/home-video/Cartoon';
import Collection from '../src/component/home-video/Collection';
import Episode from '../src/component/home-video/Episode';
import MainHomeVideo from '../src/component/home-video/MainHomeVideo';
import Manga from '../src/component/home-video/Manga';
import News from '../src/component/home-video/News';
import Picked from '../src/component/home-video/Picked';
import Ranking from '../src/component/home-video/Ranking';
export default function HomeVideoPage() {
    return (
        <div className='video-page container-video' style={{ padding: "60px 0" }}>
            <div>
                <MainHomeVideo />
            </div>
            <div>
                <Episode />
            </div>
            <div>
                <News />
            </div>
            <div>
                <Cartoon />
            </div>
            <div>
                <Manga />
            </div>
            <div>
                <Collection />
            </div>
            <div>
                <Picked />
            </div>
            <div>
                <Ranking />
            </div>
            <div>
                <All />
            </div>
        </div>
    )
}
