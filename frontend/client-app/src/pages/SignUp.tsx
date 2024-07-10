import loginImage from "../assets/images/loginImage.jpg";
import GOOGLE_ICON from "../assets/images/google-logo-search-new.svg";

const SignUp = () => {
    return (
        <div className="w-full h-screen flex items-start">
            <div className="relative w-1/2 h-full flex-col hidden sm:flex">
                <div className="absolute top-[25%] left-[10%] flex flex-col">
                    <h1 className="text-6xl text-white font-bold my-4">Track Your Money</h1>
                    <p className="text-base text-white text-normal">Start for free and get attractive offers from the community.</p>
                </div>
                <img src={loginImage} alt="login_image" className="w-full h-full object-cover" />
            </div>

            <div className="w-full h-full flex flex-col pb-20 px-20 pt-4 justify-between sm:w-1/2">
                <h1 className="text-base font-medium">Excellent Track</h1>
                <div className="w-full flex flex-col max-[550px]:">
                    <div className="w-full flex flex-col mb-10">
                        <h3 className="text-3xl font-semibold mb-2">Sign up</h3>
                        <p className="text-base mb-2">Welcome to personal financial track! Please fill the fields.</p>
                    </div>

                    <div className="w-full flex flex-col">
                        <input type="name" placeholder="Name" className="w-full bg-transparent border-b border-black outline-none focus:outline-none my-2 py-4" />
                        <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-black outline-none focus:outline-none my-2 py-4" />
                        <input type="password" placeholder="Password" className="w-full bg-transparent border-b border-black outline-none focus:outline-none my-2 py-4" />
                    </div>


                    <div className="w-full flex flex-col">
                        <button className="w-full text-white bg-black my-2 rounded-md font-semibold p-4 text-center flex  items-center justify-center">
                            Sign up
                        </button>
                        <button className="w-full  text-black bg-white my-2 rounded-md font-semibold p-4 border-2 border-black text-center flex  items-center justify-center ">
                            Log in
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-center relative py-2">
                        <div className="w-full h-[1px] bg-black"></div>
                        <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
                    </div>

                    <button className="w-full text-[#060606] mt-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                        <img src={GOOGLE_ICON} className="h-6 mr-2" />
                        Sign In With Google
                    </button>

                </div>
                <div className="w-full flex items-center justify-center">
                    <p className="">You have an account? <a href="/Login" className="font-semibold underline underline-offset-2 cursor-pointer">Log in</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;