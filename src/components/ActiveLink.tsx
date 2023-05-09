import Link from "next/link";

interface LinkProps {
	children: string;
	to: string;
}

const ActiveLink = ({ children, to }: LinkProps) => {
	return <Link href={to}></Link>;
};

export default ActiveLink;
