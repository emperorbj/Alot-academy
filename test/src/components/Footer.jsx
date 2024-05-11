const Footer = () => {
    return (
        <div>
            <div className="px-10 py-5">
                <div className="grid grid-cols-4 gap-2">
                    <div>
                        <img src="/logo.png" />
                    </div>
                    <div className="col-span-2 space-y-4">
                        <div>
                            <h3 className="text-white text-2xl font-bold">
                                New to Asher Academy?
                            </h3>
                            <p className="text-[#DDDFF1] mb-2">Subscribe to our newsletter to get updates on our exploits</p>
                        </div>
                        <div className="flex">
                            <div className="mt-2 rounded-lg bg-white px-4 py-2 flex">
                                <img src="/icon _mail.png" className="mr-4" />
                                <input type="text" placeholder="Enter E-Mail Address" className="outline-none" />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <a href=""
                                className="text-[#6B6E8D]"
                            >
                                About us</a>
                            <a href=""
                                className="text-[#6B6E8D]"
                            >
                                Help Centre
                            </a>
                            <a href=""
                                className="text-[#6B6E8D]"
                            >
                                Contact us
                            </a>
                        </div>

                        <div className="py-10">
                            <p className="text-[#EEEFF8]">© 2023 My side Project. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-bold">
                            Follow us on
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;