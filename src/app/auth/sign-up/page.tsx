import React from "react";
import {
	TextField,
	Button,
	Box,
	Typography,
	Container,
	Chip,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { GoogleIcon } from "@/app/components/icons/google-icon";
import Link from "next/link";
import { signup } from "./actions";

const SignUp: React.FC = () => {
	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				{/* <Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: 2,
					}}
				> */}
				<Box component="form" action={signup} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="user_name"
						label="Username"
						name="user_name"
						autoComplete="user_name"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Typography sx={{ textAlign: "center" }}>
						Already have an account?{" "}
						<span>
							<Link
								href="/auth/sign-in"
								style={{ alignSelf: "center" }}
							>
								Sign in
							</Link>
						</span>
					</Typography>
				</Box>
				<Divider
					sx={{
						marginTop: 2,
						marginBottom: 2,
					}}
				>
					<Chip label="or" size="small" />
				</Divider>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
				>
					<Button
						type="submit"
						fullWidth
						variant="outlined"
						// onClick={() => alert("Sign in with Google")}
						startIcon={<GoogleIcon />}
					>
						Sign up with Google
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default SignUp;
