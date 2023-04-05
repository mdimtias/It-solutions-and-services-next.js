import Image from 'next/image';
import React from 'react';
import Blog1 from "./../../../assets/Blog/blog-1.jpg";
import Blog2 from "./../../../assets/Blog/blog-2.jpg";
import Blog3 from "./../../../assets/Blog/blog-3.jpg";  
import Author1 from "./../../../assets/Author/1.jpg";  
import Author2 from "./../../../assets/Author/2.jpg";  
import Author3 from "./../../../assets/Author/3.jpg";  

const LatestNews = () => {
    return (
       <section className="latest-news-section py-10 lg:py-20 bg-[#FAFAFA] dark:bg-[#262626] overflow-hidden">
            <div className="container mx-auto px-5">
                <div className="section-header text-center flex flex-col justify-center">
                    <h4 className="font-bold text-lg text-[#175CFF] mb-2">Blog</h4>
                    <h2 className="font-bold text-4xl text-black mb-3 dark:text-white">Our Latest News and Update</h2>
                    <div className="flex justify-center">
                    <p className="text-base text-[#A1A1A1] dark:text-[#a3a3a3] lg:w-[60%]">Assertively maximize cost effective methods of iterate team driven manufactured products through equity invested via customized benefits.</p>
                    </div>
                </div>
                <div className="blogs-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-14">
                    <div data-aos="fade-right" className="latest-blog rounded-xl overflow-hidden bg-white hover:shadow-xl dark:bg-[#171717]">
                        <div className="blog-image overflow-hidden">
                            <Image src={Blog1} className="object-cover hover:scale-125 transition ease-in delay-150 duration-500" alt=""></Image>
                        </div>
                        <div className='blog transition delay-150 duration-500'>
                            <div className="blog-category py-5 px-5">
                                <p className='bg-[#453912] text-[#fbc206] text-sm inline-block rounded-lg py-[2px] px-3'>Design</p>
                            </div>
                            <div className="blog-content pb-5 px-5">
                                <h2 className="font-bold text-xl text-black dark:text-white hover:text-[#2667FC] mb-2 transition-all duration-300">Do you really understand the concept of product value?</h2>
                                <p className="text-lg text-[#A1A1A1] dark:text-[#a3a3a3]">Society is fragmenting into two parallel realities. In one reality, you have infinite ...</p>
                            </div>
                            <div className="blog-author-info flex gap-5 px-5 py-5">
                                <div className="author-img">
                                    <Image src={Author1} className="w-14 h-14 rounded-full" alt=""></Image>
                                </div>
                                <div className="author-name-date">
                                    <h3 className="text-base font-bold hover:text-[#2667FC] transition-all duration-300 dark:text-white">Jane Martin</h3>
                                    <p className="text-sm font-medium text-[#737373] dark:text-[#a3a3a3]">April 28, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="latest-blog rounded-xl overflow-hidden bg-white hover:shadow-xl dark:bg-[#171717]">
                        <div className="blog-image overflow-hidden">
                            <Image src={Blog2} className="object-cover hover:scale-125 transition ease-in delay-150 duration-500" alt=""></Image>
                        </div>
                        <div className='blog transition delay-150 duration-500'>
                            <div className="blog-category py-5 px-5">
                                <p className='bg-[#172445] text-[#fbc206] text-sm inline-block rounded-lg py-[2px] px-3'>Customer</p>
                            </div>
                            <div className="blog-content pb-5 px-5">
                                <h2 className="font-bold text-xl text-black dark:text-white hover:text-[#2667FC] mb-2 transition-all duration-300">Why Building a Community Is Crucial for Your Brand?</h2>
                                <p className="text-lg text-[#A1A1A1] dark:text-[#a3a3a3]">Building a community of customers around the product lets you also be closer to them in real-time, ...</p>
                            </div>
                            <div className="blog-author-info flex gap-5 px-5 py-5">
                                <div className="author-img">
                                    <Image src={Author2} className="w-14 h-14 rounded-full" alt=""></Image>
                                </div>
                                <div className="author-name-date">
                                    <h3 className="text-base font-bold hover:text-[#2667FC] transition-all duration-300 dark:text-white">Jane Martin</h3>
                                    <p className="text-sm text-[#737373] font-medium dark:text-[#a3a3a3]">April 28, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="latest-blog rounded-xl overflow-hidden bg-white hover:shadow-xl dark:bg-[#171717]">
                        <div className="blog-image overflow-hidden">
                            <Image src={Blog3} className="object-cover hover:scale-125 transition ease-in delay-150 duration-500" alt=""></Image>
                        </div>
                        <div className='blog transition delay-150 duration-500'>
                            <div className="blog-category py-5 px-5">
                                <p className='bg-[#45271D] text-[#fbc206] text-sm inline-block rounded-lg py-[2px] px-3'>Development</p>
                            </div>
                            <div className="blog-content pb-5 px-5">
                                <h2 className="font-bold text-xl text-black dark:text-white hover:text-[#2667FC] mb-2 transition-all duration-300">Why communities help you build better products</h2>
                                <p className="text-lg text-[#A1A1A1] dark:text-[#a3a3a3]">Society is fragmenting into two parallel realities. In one reality, you have infinite ...</p>
                            </div>
                            <div className="blog-author-info flex gap-5 px-5 py-5">
                                <div className="author-img">
                                    <Image src={Author3} className="w-14 h-14 rounded-full" alt=""></Image>
                                </div>
                                <div className="author-name-date">
                                    <h3 className="text-base font-bold hover:text-[#2667FC] transition-all duration-300 dark:text-white">Jane Martin</h3>
                                    <p className="text-sm font-medium text-[#737373] dark:text-[#a3a3a3]">April 28, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-8">
                    <button className="py-3 px-5 text-white bg-[#124acc] hover:bg-[#0044e3] rounded-lg font-bold">View All Articles</button>
                </div>
            </div>
       </section>
    );
};

export default LatestNews;