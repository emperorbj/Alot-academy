import FAQ from "./FAQ";

let faqs = [
    {
        question: "Admin, are my card details secured on this site?",
        answer: 'Hi, thanks for your question! Your payment and transaction on this site is 100% safe and secured'
    },
    {
        question: "Will my donation be used for what I donated for?",
        answer: 'Hi, thanks for your question! Your donations will be used to procure the items you picked'
    }
];




const FAQS = () => {
    return (
        <div className='py-6 text-[#15141F] space-y-10 px-10 bg-[#FBE25C]'>
            <div className="flex justify-between mb-2">
                <div>
                    <h2 className='text-2xl font-bold'>Frequently Asked Questions</h2>
                </div>
                <a className='uppercase font-light'>
                    see all
                </a>
            </div>
            <div className="space-y-4 ">


                {
                    faqs.map((faq, i) => (
                        <FAQ key={i} faq={faq} />
                    ))

                }
            </div>
        </div>
    )
}

export default FAQS;