import React from 'react';
import NavHomeBlog from '../home-blog/NavHomeBlog';
import Avatar from '../../images/detail/detail-blog/avatar.jpg';
import SmallThumbnail from '../../images/blog/small-thumbnail.jpg';
import ColLeft from '../home-blog/newest/ColLeft';
import Image from 'next/image';
import ImgDetailBlog1 from '../../images/detail/detail-blog/item1.jpg';
import ImgDetailBlog2 from '../../images/detail/detail-blog/item2.jpg';
import ImgDetailBlog3 from '../../images/detail/detail-blog/item3.jpg';
export default function DetailBlog({ blog }) {
    return (
        <div>
            <div className='container'>
                <NavHomeBlog />
            </div>
            <div className='container main-detail'>
                <div className='main-detail__left collumn-super'>
                    <h1 className="news-title">{blog?.title}</h1>
                    <div className="news-information">
                        <div className="news-meta">
                            <ul>
                                <li>{blog?.createdDate}</li>
                                <li>{blog?.views} lượt xem</li>
                            </ul>
                        </div>
                        <a href="#">
                            <span className="news-genre genre-9 has-background">Thể loại: {blog?.category?.title}</span>
                        </a>
                    </div>
                    <div style={{ fontWeight: 'bold', marginTop: 15 }} >
                        {blog?.metaDescription}
                    </div>
                    <div className='content-detail'  >
                        <p dangerouslySetInnerHTML={{ __html: blog?.content }} ></p>
                        <p className='author'>{blog?.user?.displayName}</p>
                    </div>
                    <div className="news-comment">
                        <div className='section section__title section-title-small'>
                            <div className='section__title--border'></div>
                            <div className='section__title--background'>
                                BÌnh luận
                            </div>
                        </div>
                        <div className='main-comment'>
                            <div className='main-comment__filter'>
                                <div className='main-comment__filter--left'>
                                    <span>
                                        <b className='number-comment'>3 Comments</b>
                                    </span>
                                </div>
                                <div className='main-comment__filter--right'>
                                    <label htmlFor="filter">Sort by</label>
                                    <select name="filter" id="filter">
                                        <option value="Newest">Newest</option>
                                        <option value="Oldest">Oldest</option>
                                    </select>
                                </div>
                            </div>
                            <div className='main-comment__content'>
                                <div className='self-comment comment'>
                                    <div className='avatar'>
                                        <Image src={Avatar} alt='' />
                                    </div>
                                    <div className='type-comment'>
                                        <input type='text' className='' placeholder='Add a comment...' />
                                    </div>
                                </div>
                                <div className='comment'>
                                    <div className='avatar'>
                                        <Image src={Avatar} alt='' />
                                    </div>
                                    <div className='type-comment'>
                                        <b className='name'>Hoang Hung</b>
                                        <p>Troi oi</p>
                                        <div className='action'>
                                            <a href="#">Like</a>
                                            <span aria-hidden="true"> · </span>
                                            <a href="#">Reply</a>
                                            <span aria-hidden="true"> · </span>
                                            <span className='time'>6h</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='comment'>
                                    <div className='avatar'>
                                        <Image src={Avatar} alt='' />
                                    </div>
                                    <div className='type-comment'>
                                        <b className='name'>Hoang Hung</b>
                                        <p>Troi oi</p>
                                        <div className='action'>
                                            <a href="#">Like</a>
                                            <span aria-hidden="true"> · </span>
                                            <a href="#">Reply</a>
                                            <span aria-hidden="true"> · </span>
                                            <span className='time'>6h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <ColLeft />
                        </div>
                    </div>
                </div>
                <div className='main-detail__right news-featured xs__col'>
                    <div className='closest-news'>
                        <div className='section section__title section-title-small'>
                            <div className='section__title--border'></div>
                            <div className='section__title--background'>
                                TIN GẦN NHÂT
                            </div>
                        </div>
                        <div className='xs-wrapper'>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='top-news'>
                        <div className='section section__title section-title-small'>
                            <div className='section__title--border'></div>
                            <div className='section__title--background'>
                                TOP HÔM NAY
                            </div>
                        </div>
                        <div className='xs-wrapper'>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                            <div className='xs-item'>
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image src={SmallThumbnail} alt="" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">Mùa này là anime mùa Xuân hay anime mùa Đông?</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">Tổng hợp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
