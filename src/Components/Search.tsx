import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
	return (
		<div className="w-1/2 h-[60%] flex flex-row items-center">
			<input
				type="text"
				placeholder="Search..."
				className="rounded-lg p-2 flex flex-row items-center w-full rounded-tr-none rounded-br-none"
			/>
			<button
				type="submit"
				className="bg-sky-500 hover:bg-sky-700 p-2 rounded-lg h-full flex flex-row items-center justify-center rounded-bl-none rounded-tl-none"
			>
				<FaMagnifyingGlass color="white" size={24}/>
			</button>
		</div>
	);
};

export default Search;