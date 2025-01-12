import { deleteUser } from "@/Services/userService";
import { AllUserProps } from "@/Utils/types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { UpdateUserModal } from "../Modal/(UPDATE)/UpdateUserModal";

const UserCards = ({
	user,
	setisLoading,
}: {
	user: AllUserProps;
	setisLoading: any;
}) => {
	function handleUserDelete(id: string) {
		deleteUser(id)
			.then((res) => {
				if (res.status === 200) {
					setisLoading(true);

					console.log(res);
					toast.success("User deleted !");
				} else {
					toast.error("Unexisting user");
				}
			})
			.catch((e) => {
				console.log(e), toast.error("Server error" + e);
			}),
			[];
	}
	return (
		<div className="bg-gray-800 w-full flex flex-row gap-2 items-center p-2 rounded-lg text-white">
			<div className="w-full flex flex-col gap-3 flex-wrap">
				<h2>Name : {user.name}</h2>
				<p>Email : {user.email}</p>
			</div>
			<div className="w-fit flex flex-col gap-2">
				<UpdateUserModal setisLoading={setisLoading} user={user} />
				<button
					onClick={(e) => {
						console.log(user.id);
						handleUserDelete(user.id);
					}}
					className="flex flex-row items-center p-3 rounded-full bg-red-500 hover:bg-red-700"
				>
					<FaTrashAlt />
				</button>
			</div>
		</div>
	);
};

export default UserCards;
