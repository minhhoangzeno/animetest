import React from 'react';


export default function ViewMainHomeBlog() {
    
    return (
        <div className='main-blog__col medium__col'>
            {blogs.map((blog, index) => {
                return (
                    <div className={`medium__col--item ${index == 4 && 'sm-hidden'}`} key={index}  >
                        <div className='wrapper'>
                            <div className='top__image'>
                                {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='300' height="175" />
                                    : <Image src={img} />
                                }
                            </div>
                            <div className='bottom__content'>
                                <div className='bottom__content--left sm-hidden'>
                                    {index + 1}
                                </div>
                                <div className='bottom__content--right'>
                                    <a href='#'>
                                        <span className='item-genre has-background'>{blog?.category?.title}</span>
                                    </a>
                                    <a href='#'>
                                        <h3 className='item__title'>
                                            {blog?.metaDescription}
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}