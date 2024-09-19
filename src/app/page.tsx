// import Image from "next/image";
// import styles from "./page.module.css";

import { redirect } from "next/navigation";

export default function Home() {
	if (true) {
		redirect("/auth/sign-in");
	}
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}
