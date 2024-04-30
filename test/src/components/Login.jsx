

const Login = () => {
    return (
        // form container
        <div className="flex justify-center items-center h-screen">
            <form className="bg-slate-900 w-1/2 flex flex-col items-center h-96" action="">
                <h1 className="text-white text-5xl font-light pt-16">Welcome Back</h1>
                <p className="text-slate-300">Please sign into your account</p>
                {/* email */}
                <div className="flex flex-col">
                    <label className="text-slate-300" htmlFor="email">Email address</label>
                    <input className="text-slate-300 bg-slate-800 w-72" type="text" placeholder='example@gmail.com' />
                </div>
                {/* password */}
                <div>
                    <label className="text-slate-300" htmlFor="password">password</label>
                    <input className="text-slate-300" type="password" required placeholder='password here' />
                </div>
                <div>
                    {/* check box remember me password */}
                    <div>
                        <input type="checkbox" name="remember"/>
                        <p className="text-slate-300">Remember me</p>
                    </div>
                    {/* forgot password */}
                    <div>
                        <p className="text-slate-300">Forgot password?</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button type="submit">SIGN IN</button>
                    <button>Or continue with</button>
                    <button><span>icon</span>Google</button>
                    <button><span>icon</span>Facebook</button>
                </div>
            </form>
        </div>
    )
}

export default Login
