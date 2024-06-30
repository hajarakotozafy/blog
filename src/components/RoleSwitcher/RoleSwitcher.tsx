import { useContext } from "react";
import "./RoleSwitcher.scss";
import { RoleContext } from "../../contexts/RoleContext";

const RoleSwitcher = () => {
	const {role, dispatch} = useContext(RoleContext);

	const submitRole = (e) => {
		if(e.target.value === "admin") dispatch({type: "setIsAdmin", value: true})
		else dispatch({type: "setIsAdmin", value: false})
	}

	return (
		<div className="role-switcher-container">
			<form>
				<div className="role-switcher-form-control">
				<input  
					onChange={e=>submitRole(e)}
					type="radio" 
					name="role" 
					id="admin" 
					value="admin" 
					defaultChecked
				/>
				<label htmlFor="admin">Admin view</label>
				</div>
				<div className="role-switcher-form-control">
				<input 
					onChange={e=>submitRole(e)}
					type="radio" 
					name="role" 
					id="user" 
					value="user"
				/>
				<label htmlFor="user">User view</label>
				</div>
			</form>
		</div>
	)
}

export default RoleSwitcher;