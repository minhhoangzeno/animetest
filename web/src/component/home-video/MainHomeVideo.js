import React from 'react';
import Image from 'next/image'
import HeroVideo from '../../images/video/hero.jpg'
import MediumVideo from '../../images/video/smallitem.jpg'

export default function MainHomeVideo() {
    return (
        <div className='tray section-hero'>
            <div className='row__hero'>
                <div className='row__hero--left'>
                    <a href='#' className='hero-cover' target='_blank'>
                        <Image src={HeroVideo} alt='' />
                        <div className="slider-play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                            </svg>
                        </div>
                        <div className="slider-meta">
                            <span className="slider-views">Girl X School</span>
                            <div className="slider-title">Game Học Viện Siêu Nhân</div>
                        </div>
                    </a>
                </div>
                <div className='row__hero--right'>
                    <a href='#' className='right-item' target="_blank">
                        <Image src={MediumVideo} alt='' />
                    </a>
                    <a href='#' className='right-item' target="_blank">
                        <Image src={MediumVideo} alt='' />
                    </a>
                    <a href='#' className='right-item md-hidden' target="_blank">
                        <Image src={MediumVideo} alt='' />
                    </a>
                </div>
            </div>
            <div className='row__small md-hidden'>
                <a href='#' target='_blank' className='row__small--item' >
                    <Image src={MediumVideo} alt='' />
                </a>
                <a href='#' target='_blank' className='row__small--item' >
                    <Image src={MediumVideo} alt='' />
                </a>
                <a href='#' target='_blank' className='row__small--item' >
                    <Image src={MediumVideo} alt='' />
                </a>
                <a href='#' target='_blank' className='row__small--item' >
                    <Image src={MediumVideo} alt='' />
                </a>
            </div>

        </div>
    )
}
