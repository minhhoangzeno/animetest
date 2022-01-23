import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import img from '../../images/item.jpg';
import { firestore } from '../../utils/firebaseInit';
export default function MainHomeBlog() {
    return (
        <section className='section main-blog container'>
            <div className='main-blog__wrapper'>
                <div className='collumn-super'>
                    <ViewMainHomeBlog />
                    <NewMainHomeBlog />

                </div>
                <div className='main-blog__col small__col'>
                    <RandomMainHomeBlog />
                    <FavouriteMainHomeBlog />
                </div>
            </div>
        </section>
    )
}

function ViewMainHomeBlog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false)
    const LIMIT = 5;
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        setLoading(true)
        try {
            let filter = firestore
                .collection("Blog")
                .orderBy("views", "desc")
                .limit(LIMIT)

            if (blogs && blogs.length > 0) {
                filter = filter.startAfter(blogs[blogs.length - 1].createdDate)
            }
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            let filterCurrentDay = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") <= moment(new Date()).format("YYYY-MM-DD"))
            setBlogs(filterCurrentDay);
            setLoading(false)
        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <>
            {!loading && <div className='main-blog__col medium__col'>
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
            }
        </>
    )
}

function NewMainHomeBlog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false)
    const LIMIT = 4;
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        setLoading(true)
        try {
            let filter = firestore
                .collection("Blog")
                .orderBy("createdDate", "desc")
                .limit(LIMIT)

            if (blogs && blogs.length > 0) {
                filter = filter.startAfter(blogs[blogs.length - 1].createdDate)
            }
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            let filterCurrentDay = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") <= moment(new Date()).format("YYYY-MM-DD"))
            setBlogs(filterCurrentDay);
            setLoading(false)
        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <>
            {!loading && <>
                <div className='main-blog__col large__col'>
                    {blogs.map((blog, index) => {
                        return (
                            <div className='large__col--item' key={index} >
                                <div className='wrapper'>
                                    <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='400' height="225" />
                                    <div className='item-meta'>
                                        <a href='#'>
                                            <span className="item-genre">{blog?.category?.title}</span>
                                        </a>
                                        <span className="item-date">
                                            - {blog?.createdDate.toDate().toLocaleString('vi')}
                                        </span>
                                        <a href='#'>
                                            <h3 className='item__title'>
                                                {blog?.metaDescription}
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </>}

        </>
    )
}

function RandomMainHomeBlog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false)
    let date = moment().format("YYYY-MM-DD");
    useEffect(() => {
        search()
    }, []);
    function getRandomElementsFromArray(array, numberOfRandomElementsToExtract) {
        const elements = [];

        function getRandomElement(arr) {
            if (elements.length < numberOfRandomElementsToExtract) {
                const index = Math.floor(Math.random() * arr.length)
                const element = arr.splice(index, 1)[0];
                elements.push(element)
                return getRandomElement(arr)
            } else {
                return elements
            }
        }

        return getRandomElement([...array])
    }
    const search = async () => {
        setLoading(true)
        try {
            let filter = firestore
                .collection("Blog")
                .where("writeDate", "==", date)

            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            setBlogs(getRandomElementsFromArray(resp, 3))
            setLoading(false)
        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <>
            {!loading && <><div className='collumn-block'>
                {blogs.map((blog, index) => {
                    return (
                        <div className={`small__col--item ${index == 2 && 'xs-hidden'}`} key={index} >
                            <div className='wrapper'>
                                {blog?.photoURL ?
                                    <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='400' height="225" />
                                    : <Image src={img} />
                                }
                                <div className='item-meta'>
                                    <a href='#'>
                                        <span className="item-genre">{blog?.category?.title}</span>
                                    </a>
                                    <span className="item-date md-hidden">
                                        / {moment(date).format("DD-MM-YYYY")}
                                    </span>
                                    <a href='#'>
                                        <h3 className='item__title'>
                                            {blog?.metaDescription}
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div></>}
        </>
    )
}

function FavouriteMainHomeBlog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false)
    const LIMIT = 5;
    let date = moment().format("YYYY-MM-DD");
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        setLoading(true)
        try {
            let filter = firestore
                .collection("Blog")
                .where("writeDate", "==", date)
                .orderBy("views", "desc")
                .limit(LIMIT)

            if (blogs && blogs.length > 0) {
                filter = filter.startAfter(blogs[blogs.length - 1].createdDate)
            }
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            setBlogs(resp);
            setLoading(false)
        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <>
            {!loading && <div className='news-featured xs__col'>
                <div className='section section__title section-title-small'>
                    <div className='section__title--border'></div>
                    <div className='section__title--background'>
                        TIN HAY TRONG NGÀY
                    </div>
                </div>
                {blogs.map((blog, index) => {
                    return (
                        <div className='xs-item' key={index} >
                            <div className='item__small--thumbnail item__thumbnail'>
                                <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='200' height="125" />
                            </div>
                            <div className='item__small--content'>
                                <a href='#'>
                                    <h3 className="item__title">{blog.title}</h3>
                                </a>
                                <a href='#'>
                                    <span className="item-genre genre-9">{blog.category.title}</span>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </>
    )
}