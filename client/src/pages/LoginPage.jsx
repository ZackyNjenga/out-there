export default function loginPage(){
    return (
        <div className="mt-4">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto ">
                <input type="email" placeholder={'youremail.com'}/>
                <input type="password" placeholder={'password'}/>
                <button className="primary"> Login </button>
            </form>

        </div>
    )
}