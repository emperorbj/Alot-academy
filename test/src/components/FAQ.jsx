const FAQ = ({ faq }) => {
    return (
        <div className="flex">
            <div className="me-4">
                <img src="/user.png" className="h-[40px] w-[40px]" />
            </div>
            <div>
                <h4 className="font-bold">{faq.question}</h4>
                <p>{faq.answer}</p>
            </div>
        </div>
    )
}

export default FAQ;