"use client"

import React from 'react'

const ModalPage = () => {
	return (
		<div className='text-center'>
			<button className='btn btn-success text-white text-xl px-4' onClick={()=> document.getElementById("my_modal_1").showModal() }>Open Modal</button>

			<dialog id='my_modal_1' className='modal'>
				<div className="modal-box">
					<h3 className='font-bold text-lg'>Hello!</h3>
					<p className='py-4'>Press Esc or click the button below to close</p>
					<div className="modal-action">
						<form method='dialog' action="" className=''>
							<button className='btn'>Close</button>
						</form>
					</div>
				</div>
			</dialog>

		</div>
	)
}

export default ModalPage