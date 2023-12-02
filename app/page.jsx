import React from "react";

const HomePage = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-5">
                    Welcome to the DaisyUI Crash Course
                </h1>
                <div className="mb-4">
                    <p className="text-gray-600 mb-2 w-full">Buttons</p>
                    <div className="flex gap-x-4 mb-4">
                        <button className="btn btn-primary">
                            Primary Button
                        </button>
                        <button className="btn btn-secondary">
                            Primary Secondary
                        </button>
                        <button className="btn btn-outline">
                            Primary Outline
                        </button>
                        <button className="btn btn-neutral">
                            Primary Neutral
                        </button>
                        <button className="btn btn-warning">
                            Primary Warning
                        </button>
                    </div>
                </div>
                

                <div className="mb-4 space-y-4">
                    <p className="text-gray-600 mb-2">Alerts</p>
                    <div className="alert alert-success">Alert Success</div>
                    <div className="alert alert-warning">Alert Warning</div>
                    <div className="alert alert-error">Alert Error</div>
                    <div className="alert alert-info">Alert Info</div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
