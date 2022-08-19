import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { ApplicationViews } from "./components/views/ApplicationViews"
import { Authorized } from "./components/views/Authorized"
import {NavBar} from "./components/nav/NavBar"



export const Nutshell = () => {
	return (<Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
    <Route path="*" element={
			<Authorized>
				<>
				<NavBar/>
					<ApplicationViews />
				
				</>
			</Authorized>

		} />
	</Routes>)
}
