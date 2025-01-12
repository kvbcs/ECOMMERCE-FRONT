import { AllCategoriesProps, AllProductsProps, AuthProps } from "@/Utils/types";
import axios from "axios";

//GET products --------------------------------------------------------------------------------------------------------------------
export async function getAllProducts() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}product/all`;
	return axios
		.get(url)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//GET search products --------------------------------------------------------------------------------------------------------------------
export async function searchProducts(query: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}product/all/${query}`;
	return axios
		.get(url)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//POST products --------------------------------------------------------------------------------------------------------------------
export async function addProduct(product: AllProductsProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}product/add`;

	let axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	return axios
		.post(
			url,
			{
				name: product.name,
				image: product.image,
				stock: Number(product.stock),
				price: Number(product.price),
				categoryId: product.categoryId,
			},
			axiosConfig
		)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//PATCH products --------------------------------------------------------------------------------------------------------------------
export async function updateProduct(
	productUpdateData: AllProductsProps,
	id: string
) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}product/update/${id}`;

	let axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	return axios
		.patch(
			url,
			{
				name: productUpdateData.name,
				image: productUpdateData.image,
				stock: Number(productUpdateData.stock),
				price: Number(productUpdateData.price),
				categoryId: productUpdateData.categoryId,
			},
			axiosConfig
		)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//DELETE products --------------------------------------------------------------------------------------------------------------------
export async function deleteProduct(id: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}product/delete/${id}`;

	let axiosConfig = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	return axios
		.delete(
			url,

			axiosConfig
		)
		.then((res) => {
			console.log(res);
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}
