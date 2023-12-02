import React from "react";

const LoginPage = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mx-auto p-8 mt-4 rounded-lg shadow-lg">
                <p className="text-2xl font-semibold mb-6">Login</p>

                <form action="" className="rounded-2xl shadow-2xl py-8 px-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="label">Email</label>
						<input type="text" className="input input-bordered w-full" placeholder="example@example.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="label">Password</label>
						<input type="password" className="input input-bordered w-full"/>
                    </div>
					<button type="submit" className="btn  bg-purple-600 text-white w-full rounded-full">LOG IN</button>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
