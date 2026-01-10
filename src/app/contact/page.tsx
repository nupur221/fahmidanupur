import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdChat } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-100 dark:bg-[#0b1220] min-h-screen flex items-center justify-center text-gray-900 dark:text-white font-Times New Roman transition-colors duration-300">
            <div className="max-w-[140rem] w-full mx-auto px-4 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] text-center mb-16 mt-16">
                    <h2 className="inline-block bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-100 py-2 px-6 rounded-full text-[2.2rem] xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl mb-6 text-center animate-[fadeInDown_1s_ease-out_0.9s_both] tracking-wide [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] font-bold">
                        Let's Connect
                    </h2>
                    <p className="text-lg xl:text-base lg:text-base md:text-base sm:text-sm font-semibold mb-8 animate-[fadeInUp_1s_ease-out_0.9s_both] tracking-wide text-center hover:translate-x-2.5 transition-transform duration-300 text-gray-600 dark:text-gray-300">
                        Have a project in mind? Let's create something amazing together.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">

                    <div className="flex-1 w-full max-w-2xl flex flex-col gap-6 w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                        {/* Get in Touch Card */}
                        <div className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-8 rounded-sm text-center flex flex-col items-center justify-center h-64 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm dark:shadow-none">
                            <div className="bg-gray-900 dark:bg-white p-4 rounded-sm mb-4 ">
                                <MdChat className="text-white dark:text-black text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Get in Touch</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        {/* Contact Info Rows */}
                        <div className="flex flex-col gap-4">
                            <div className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-6 rounded-sm flex items-center gap-4 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm dark:shadow-none">
                                <div className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-lg border border-gray-200 dark:border-zinc-800 ">
                                    <MdEmail className="text-xl text-gray-800 dark:text-white" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-gray-500 tracking-wider mb-1">Email</p>
                                    <p className="font-medium text-sm text-gray-800 dark:text-gray-200 truncate">fahmidanupur99@gmail.com</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-6 rounded-sm flex items-center gap-4 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm dark:shadow-none">
                                <div className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-lg border border-gray-200 dark:border-zinc-800">
                                    <MdPhone className="text-xl text-gray-800 dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 tracking-wider mb-1">Phone(Call + Whatsapp)</p>
                                    <p className="font-medium text-sm text-gray-800 dark:text-gray-200">+880 1917386947</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-6 rounded-sm flex items-center gap-4 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm dark:shadow-none">
                                <div className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-lg border border-gray-200 dark:border-zinc-800">
                                    <MdLocationOn className="text-xl text-gray-800 dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 tracking-wider mb-1">Location</p>
                                    <p className="font-medium text-sm text-gray-800 dark:text-gray-200">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="flex-1 w-full max-w-2xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-8 rounded-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors h-full shadow-sm dark:shadow-none">
                        <form className="flex flex-col gap-6 h-full justify-between w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <label className="text-xs text-gray-500 tracking-wider mb-2 block">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        className="w-full bg-gray-50 dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-3 rounded-sm text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-zinc-700 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="text-xs text-gray-500 tracking-wider mb-2 block">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="mail"
                                        className="w-full bg-gray-50 dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-3 rounded-sm text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-zinc-700 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 tracking-wider mb-2 block">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-gray-50 dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-3 rounded-sm text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-zinc-700 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="flex-grow">
                                <label className="text-xs text-gray-500 tracking-wider mb-2 block">Message</label>
                                <textarea
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-gray-50 dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 p-3 rounded-sm text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-zinc-700 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 dark:bg-blue-600 text-white font-bold tracking-widest py-4 px-8 rounded-sm hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors flex items-center justify-center gap-3 mt-2 w-full"
                            >
                                <FiSend />
                                Send Message
                            </button>
                        </form>

                        {/* Social Links Row */}
                        <div className="flex flex-row gap-4 justify-center mt-8 pt-6 border-t border-gray-200 dark:border-[#0b1220] w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                            <a href="https://github.com/nupur221" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 dark:bg-[#0b1220] rounded-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors text-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500">
                                <FaGithub className="text-gray-800 dark:text-white" />
                            </a>
                            <a href="https://www.linkedin.com/in/fahmida-akter-nupur-53643426a/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 dark:bg-[#0b1220] rounded-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors text-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500">
                                <FaLinkedin className="text-blue-700 dark:text-white" />
                            </a>
                            <a href="https://www.facebook.com/nupur.385" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 dark:bg-[#0b1220] rounded-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors text-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500">
                                <FaFacebook className="text-blue-600 dark:text-white" />
                            </a>
                            <button className="p-3 bg-gray-50 dark:bg-[#0b1220] rounded-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors text-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500">
                                <FaTwitter className="text-blue-400 dark:text-white" />
                            </button>
                            <a href="mailto:fahmidanupur99@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 dark:bg-[#0b1220] rounded-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors text-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500">
                                <MdEmail className="text-blue-600 dark:text-white" />
                            </a>
                            <button className="p-3 bg-gray-50 dark:bg-[#0b1220] rounded-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors text-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500">
                                <FaInstagram className="text-pink-600 dark:text-white" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
