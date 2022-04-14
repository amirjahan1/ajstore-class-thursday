import React from 'react';





const Footer = () => {

    return(
        <footer className="text-center bg-gray-900 text-white">
            <div className="container px-6 pt-6">
                <div className="flex justify-center mb-6">


                    <a href="https://www.instagram.com/amirjahan_1" type="button"
                       className="rounded-full border-2 transition duration-300 hover:text-pink-600 hover:border-purple-600  border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-11 h-11 m-1 flex justify-center items-center">
                        <i className="ri-instagram-line text-2xl"/>
                    </a>

                    <a href="https://twitter.com/amirjahan_1" type="button"
                       className="rounded-full border-2 transition duration-300 hover:text-blue-600 hover:border-blue-600 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-11 h-11 m-1 flex justify-center items-center">
                        <i className="ri-twitter-line text-2xl"/>
                    </a>

                    <a href="https://t.me/Amirjahan_1" type="button"
                       className="rounded-full  transition duration-300 hover:text-blue-600 hover:border-blue-600 border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-11 h-11 m-1 flex justify-center items-center">
                        <i className="ri-telegram-line text-2xl"/>
                    </a>
                </div>

                <div>
                    <form action="">
                        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                            <div className="md:ml-auto md:mb-6">
                                <p className="">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="md:mb-6">
                                <input
                                    type="text"
                                    className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                                    id="exampleFormControlInput1"
                                    placeholder="Email address"/>
                            </div>

                            <div className="md:mr-auto mb-6">
                                <button type="submit"
                                        className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mb-6 text-sm ">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright:
                <a className="text-white" href="https://tailwind-elements.com/">Amir Jahan</a>
            </div>
        </footer>

    )
}

export default Footer;