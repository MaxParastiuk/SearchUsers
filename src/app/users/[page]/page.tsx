import { IUser } from "@/interfaces/IUser";
import { GetServerSideProps } from "next/types";

interface FilmsProps {
	data: {
		Search: IUser[];
		totalResults: string;
	};
	query: { name: string };
}

const ListUserPage = () => {
	return (
		<div>
			<h1>HELLO LIST USER</h1>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<any> = async ({
	query,
}) => {
	const res = await fetch("https://dummyjson.com/users?limit=10&skip=0");
	const data: any = await res.json();

	return {
		props: {
			data,
			query,
		},
	};
};

export default ListUserPage;
