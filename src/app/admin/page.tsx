"use client";
import UserCards from "@/Components/Cards/UserCards";
import { AddCategoryModal } from "@/Components/Modal/AddCategory";
import { AddProductModal } from "@/Components/Modal/AddProductModal";
import { getAllUsers } from "@/Services/fetchData";
import { AllUserProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
	const [userList, setuserList] = useState<AllUserProps[]>([]);

	useEffect(() => {
		getAllUsers()
			.then((res) => {
				setuserList(res);
				console.log(res);
				toast.success("got users");
			})
			.catch((e) => {
				console.log(e);
				toast.error("no users :(");
			});
	}, []);

	return (
		<div className="h-screen w-full flex flex-col justify-evenly">
			<h1 className="text-center text-2xl">Administration</h1>
			<div className="flex flex-row w-full justify-evenly">
				<AddProductModal />
				<AddCategoryModal />
			</div>
			<div className="w-full flex flex-col justify-evenly gap-4 items-center p-4 rounded-lg h-fit bg-black text-white overflow-auto">
				<h2>All Users</h2>
				{userList &&
					userList.map((user) => {
						return <UserCards key={user.id} user={user} />;
					})}
			</div>
		</div>
	);
};

export default page;
