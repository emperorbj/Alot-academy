const ProgressBar = ({ percent = "0" }) => {
    return(
        <div className="h-1 w-full bg-gray-600 my-2">
            <div className="h-1 bg-[#FBE25C]" style={{ width: percent + "%" }}></div>
        </div>
    )
}

export default ProgressBar;