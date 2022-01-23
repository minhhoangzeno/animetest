import React from 'react'
// import '../../../styles/anime-video/video-home.scss';
// import '../../../styles/detail/detail-video.scss'
import Cartoon from '../home-video/Cartoon';
import Manga from '../home-video/Manga';
import Picked from '../home-video/Picked';
// import Image from 'next/image'
export default function DetailVideo() {
    return (
        <div className='section container-video'>
            <div className='main-detail'>
                <div className='player'>
                    <div className='player__main'>
                        <div className='player__main--video'>
                            <iframe className='hero-player' src="https://www.youtube.com/embed/ZwcAcjmuodM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            <div class="player-meta">
                                <h1 class="film-info-title">Gotoubun no Hanayome Tập 9 </h1>
                                <div class="film-info-views">
                                    <span>2,077,016 lượt xem</span>
                                </div>

                                <div class="film-info-action">
                                    {/* <div className='action__left'> */}
                                        <div class="film-info-like" data-liked="0">
                                            <svg width='24' height='24' viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                                            </svg>
                                            <span class="film-like-label">thích</span>

                                            <span class="count-box">4,771</span>
                                        </div>

                                        <div class="film-info-follow" data-following="0">
                                            <svg width='24' height='24' viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
                                            </svg>
                                            <span class="film-follow-label">theo dõi</span>
                                            <span class="count-box">4,663</span>
                                        </div>
                                    {/* </div> */}
                                    {/* <div className='action__right'> */}
                                        <a href="#" target="_blank">
                                            <div class="film-info-share">
                                                <svg width='24' height='24' viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
                                                </svg>
                                                <span>Share</span>
                                            </div>
                                        </a>
                                    {/* </div> */}

                                </div>
                            </div>
                        </div>
                        <div className="player__sidebar">
                            <div className="player__sidebar--header  ">
                                <div className="tab-item tab-episode activated">Danh sách tập</div>
                                {/* <div className="tab-item tab-ova">OVA</div>
                                <div className="tab-item tab-video">Video</div> */}
                                <div className="tab-item tab-information ">
                                    <span>Thông tin</span>
                                    {/* icon info */}
                                </div>
                                <div className="tab-item tab-comment ">Bình luận</div>
                            </div>
                            <div className="player__sidebar--body body-episode ">
                                <div className="episode-list-tool">
                                    <div className="season-active hidden" id="season-active"></div>
                                    <div className="season-list ps-container ps-theme-default" data-ps-id="6bf62bb4-6740-a1fa-2079-5af566b9b484">
                                        <div className="ps-scrollbar-x-rail">
                                            <div className="ps-scrollbar-x" tabindex="0">
                                            </div>
                                        </div>
                                        <div className="ps-scrollbar-y-rail">
                                            <div className="ps-scrollbar-y" tabindex="0">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="episode-total">Tổng số: 3 video</div>
                                    <div className="episode-select">
                                        Tập
                                        <input type="number" min="1" max="3" name="1" />
                                        <div className="play-button">
                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="episode-list ps-container ps-theme-default" data-ps-id="5935c571-4393-9aec-a588-a7da5d8d4619">
                                    <div className="ps-scrollbar-x-rail">
                                        <div className="ps-scrollbar-x" tabindex="0">
                                        </div>
                                    </div>
                                    <div className="ps-scrollbar-y-rail">
                                        <div className="ps-scrollbar-y" tabindex="0">
                                        </div>
                                    </div>
                                    <div className="episode__item episode-141394">
                                        <a href="#">
                                            <div className="episode__item--thumbnail">
                                                <img src="https://s199.imacdn.com/vg/2022/01/05/9dd1d7a0eaec7d30_69536a1d984dd56d_12432616414009288118684.jpg" />
                                            </div>
                                            <div className="episode__item--meta">
                                                <div className="episode-item-title">Tập 1 - Musashi và Kojiro</div>
                                                <div className="episode-item-views">22,032 lượt xem</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="episode__item episode-141435">
                                        <a href="#">
                                            <div className="episode__item--thumbnail">
                                                <img src="https://s199.imacdn.com/vg/2022/01/13/3ffbc38db357086b_24ade1c3bae6fb7e_2633716420082087118684.jpg" />
                                            </div>
                                            <div className="episode__item--meta">
                                                <div className="episode-item-title">Tập 2 - Niềm tự hào của võ sĩ</div>
                                                <div className="episode-item-views">10,148 lượt xem</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="episode__item episode-141492 activated">
                                        <a href="#">
                                            <div className="episode__item--thumbnail">
                                                <img src="https://s199.imacdn.com/vg/2022/01/20/cd67ac4b16e490bc_ae745cd147c497b0_3714916426155129118684.jpg" />
                                            </div>
                                            <div className="episode__item--meta">
                                                <div className="episode-item-title">Tập 3 - Thế giới bên ngoài</div>
                                                <div className="episode-item-views">3,868 lượt xem</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="episode__item episode-141435">
                                        <a href="#">
                                            <div className="episode__item--thumbnail">
                                                <img src="https://s199.imacdn.com/vg/2022/01/13/3ffbc38db357086b_24ade1c3bae6fb7e_2633716420082087118684.jpg" />
                                            </div>
                                            <div className="episode__item--meta">
                                                <div className="episode-item-title">Tập 2 - Niềm tự hào của võ sĩ</div>
                                                <div className="episode-item-views">10,148 lượt xem</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="episode__item episode-141435">
                                        <a href="#">
                                            <div className="episode__item--thumbnail">
                                                <img src="https://s199.imacdn.com/vg/2022/01/13/3ffbc38db357086b_24ade1c3bae6fb7e_2633716420082087118684.jpg" />
                                            </div>
                                            <div className="episode__item--meta">
                                                <div className="episode-item-title">Tập 2 - Niềm tự hào của võ sĩ</div>
                                                <div className="episode-item-views">10,148 lượt xem</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="episode__item episode-141435">
                                        <a href="#">
                                            <div className="episode__item--thumbnail">
                                                <img src="https://s199.imacdn.com/vg/2022/01/13/3ffbc38db357086b_24ade1c3bae6fb7e_2633716420082087118684.jpg" />
                                            </div>
                                            <div className="episode__item--meta">
                                                <div className="episode-item-title">Tập 2 - Niềm tự hào của võ sĩ</div>
                                                <div className="episode-item-views">10,148 lượt xem</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="episode__item episode-141435">
                                        <a href="#">
                                            <div className="episode__item--thumbnail">
                                                <img src="https://s199.imacdn.com/vg/2022/01/13/3ffbc38db357086b_24ade1c3bae6fb7e_2633716420082087118684.jpg" />
                                            </div>
                                            <div className="episode__item--meta">
                                                <div className="episode-item-title">Tập 2 - Niềm tự hào của võ sĩ</div>
                                                <div className="episode-item-views">10,148 lượt xem</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="episode__item episode-141435">
                                        <a href="#">
                                            <div className="episode__item--thumbnail">
                                                <img src="https://s199.imacdn.com/vg/2022/01/13/3ffbc38db357086b_24ade1c3bae6fb7e_2633716420082087118684.jpg" />
                                            </div>
                                            <div className="episode__item--meta">
                                                <div className="episode-item-title">Tập 2 - Niềm tự hào của võ sĩ</div>
                                                <div className="episode-item-views">10,148 lượt xem</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <div class="ova-list hidden ps-container ps-theme-default" data-ps-id="c9949e9a-68af-421c-2273-ccf403182910">
                                    <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                                        <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;">
                                        </div>
                                    </div>
                                    <div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
                                        <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="video-list hidden"></div>
                                <div class="loading hidden"></div> */}
                            </div>

                        </div>
                        <div className='player__main--content'>
                            <div class="film-content">
                                <div class="film__info">
                                    <div class="film__info--genre">
                                        Thể loại:
                                        <a href="/anime/vien-tuong" target="_blank">Viễn Tưởng</a>,&nbsp;
                                        <a href="/anime/hai-huoc" target="_blank">Hài Hước</a>                                    </div>

                                    <div class="film__info--subteam">
                                        Nhóm sub:
                                        <a href="https://phim1080.me/" rel="nofollow" target="_blank">Phim1080</a>                                    </div>

                                    <div class="film__info--genre">
                                        Bộ sưu tập:
                                        <a href="/bo-suu-tap/anime-mua-dong-2022" target="_blank">Anime Mùa Đông 2022</a>                                    </div>

                                    <div class="film__info--description">
                                        Hoàng tử của một vương quốc nhỏ bé, yếu ớt đang phấu đấu vì một chuyện duy nhất: bán nước và sống một cuộc sống yên tĩnh, nhàn hạ! Đáng buồn thay, trở ngại lớn nhất mà anh phải đối mặt chính là "mình giỏi vãi chưởng"...! Khi anh đạt được những thành tích lớn hơn bao giờ hết thì lại càng nhận được nhiều hơn sự ưu ái từ người dân trong vương quốc... điều này đã khiến việc thực hiện ước mơ bán nước càng ngày càng khó khăn!
                                    </div>

                                    <div class="film__info--tag">
                                        <span>Tensai Ouji no Akaji Kokka Saisei Jutsu</span>
                                        <span>Tensai Ouji no Akaji Kokka Saisei Jutsu Vietsub</span>
                                        <span>Tensai Ouji no Akaji Kokka Saisei Jutsu HD</span>
                                        &nbsp;
                                        <span>tập 1</span>
                                        <span>Tensai Ouji no Akaji Kokka Saisei Jutsu tập mới nhất</span>
                                    </div>

                                    <div class="film__info--tag">
                                    </div>
                                </div>
                                <div class="banner-300x250 hidden">
                                    <iframe width="320" height="387" src="https://kynguyensohoa.org/side-ad" frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Cartoon />
            <Manga />
            <Picked />
        </div>



    )
}
