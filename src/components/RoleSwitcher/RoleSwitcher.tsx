import "./RoleSwitcher.scss";

const RoleSwitcher = ({isAdmin}: boolean) => {
	return (
		<div className="role-switcher-container">
			<form>
				<div className="role-switcher-form-control">
				<input type="radio" name="role" id="admin" value="admin" checked/>
				<label for="admin">Admin view</label>
				</div>
				<div className="role-switcher-form-control">
				<input type="radio" name="role" id="user" value="user"/>
				<label for="user">User view</label>
				</div>
			</form>
		</div>
	)
}

export default RoleSwitcher;