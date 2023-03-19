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
       <section className="latest-news-section py-10 lg:py-20 bg-[#FAFAFA]">
            <div className="container mx-auto px-5">
                <div className="section-header text-center flex flex-col justify-center">
                    <h4 className="font-bold text-lg text-[#175CFF] mb-2">Blog</h4>
                    <h2 className="font-bold text-4xl text-black mb-3">Our Latest News and Update</h2>
                    <div className="flex justify-center">
                    <p className="text-base text-[#A1A1A1] lg:w-[60%]">Assertively maximize cost effective methods of iterate team driven manufactured products through equity invested via customized benefits.</p>
                    </div>
                </div>
                <div className="blogs-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-14">
                    <div className="latest-blog rounded-xl overflow-hidden bg-white hover:shadow-xl">
                        <div className="blog-image overflow-hidden">
                            <Image src={Blog1} className="object-cover hover:scale-125 transition ease-in delay-150 duration-500"></Image>
                        </div>
                        <div className='blog transition delay-150 duration-500'>
                            <div className="blog-category py-5 px-5">
                                <p className='bg-[#FFF3CC] text-yellow-400 text-base inline-block rounded-lg py-1 px-4'>Design</p>
                            </div>
                            <div className="blog-content pb-5 px-5">
                                <h2 className="font-bold text-xl text-black hover:text-[#2667FC] mb-2 transition-all duration-300">Do you really understand the concept of product value?</h2>
                                <p className="text-lg text-[#A1A1A1]">Society is fragmenting into two parallel realities. In one reality, you have infinite ...</p>
                            </div>
                            <div className="blog-author-info flex gap-5 px-5 py-5">
                                <div className="author-img">
                                    <Image src={Author1} className="w-14 h-14 rounded-full"></Image>
                                </div>
                                <div className="author-name-date">
                                    <h3 className="text-base font-bold hover:text-[#2667FC] transition-all duration-300">Jane Martin</h3>
                                    <p className="text-sm text-[#737373]">April 28, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-blog rounded-xl overflow-hidden bg-white hover:shadow-xl">
                        <div className="blog-image overflow-hidden">
                            <Image src={Blog2} className="object-cover hover:scale-125 transition ease-in delay-150 duration-500"></Image>
                        </div>
                        <div className='blog transition delay-150 duration-500'>
                            <div className="blog-category py-5 px-5">
                                <p className='bg-[#FFF3CC] text-yellow-400 text-base inline-block rounded-lg py-1 px-4'>Design</p>
                            </div>
                            <div className="blog-content pb-5 px-5">
                                <h2 className="font-bold text-xl text-black hover:text-[#2667FC] mb-2 transition-all duration-300">Why Building a Community Is Crucial for Your Brand?</h2>
                                <p className="text-lg text-[#A1A1A1]">Building a community of customers around the product lets you also be closer to them in real-time, ...</p>
                            </div>
                            <div className="blog-author-info flex gap-5 px-5 py-5">
                                <div className="author-img">
                                    <Image src={Author1} className="w-14 h-14 rounded-full"></Image>
                                </div>
                                <div className="author-name-date">
                                    <h3 className="text-base font-bold hover:text-[#2667FC] transition-all duration-300">Jane Martin</h3>
                                    <p className="text-sm text-[#737373]">April 28, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-blog rounded-xl overflow-hidden bg-white hover:shadow-xl">
                        <div className="blog-image overflow-hidden">
                            <Image src={Blog3} className="object-cover hover:scale-125 transition ease-in delay-150 duration-500"></Image>
                        </div>
                        <div className='blog transition delay-150 duration-500'>
                            <div className="blog-category py-5 px-5">
                                <p className='bg-[#FFF3CC] text-yellow-400 text-base inline-block rounded-lg py-1 px-4'>Design</p>
                            </div>
                            <div className="blog-content pb-5 px-5">
                                <h2 className="font-bold text-xl text-black hover:text-[#2667FC] mb-2 transition-all duration-300">Why communities help you build better products</h2>
                                <p className="text-lg text-[#A1A1A1]">Society is fragmenting into two parallel realities. In one reality, you have infinite ...</p>
                            </div>
                            <div className="blog-author-info flex gap-5 px-5 py-5">
                                <div className="author-img">
                                    <Image src={Author1} className="w-14 h-14 rounded-full"></Image>
                                </div>
                                <div className="author-name-date">
                                    <h3 className="text-base font-bold hover:text-[#2667FC] transition-all duration-300">Jane Martin</h3>
                                    <p className="text-sm text-[#737373]">April 28, 2022</p>
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