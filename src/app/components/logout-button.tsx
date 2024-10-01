"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

function LogoutButton() {
	const supabase = createClient();
	const router = useRouter();

	async function handleLogout() {
		await supabase.auth.signOut();
		router.replace("/auth/sign-in");
	}

	return <button onClick={handleLogout}>Cerrar Sesión</button>;
}

export default LogoutButton;
