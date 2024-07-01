import { FC } from "react";
import "./PostForm.scss";
import Button from "../../components/Button/Button";

const PostForm:FC = () => {
	return(
		<div className="post-form-container">
			<div className="post-form-inner">
				<div className="post-form-header">
                    <div className="post-form-title">
                        <h3>Create a new post</h3>
                    </div>
                </div>
                <div className="orderednav-container">
	                <div className="orderednav-inner">
	                    <p>Dashboard</p>
	                    <span className="dot"></span>
	                    <p>Blog</p>
	                    <span className="dot"></span>
	                    <p>Create</p>    
	                </div>    
	            </div>


	            <div className="post-form-inputs-container">
	            	<div className="form-bloc">
	            		<div className="form-bloc-title">
	            			<h4>Details</h4>
	            			<p>Title, short description, image...</p>
	            		</div>	
	            		<div className="form-bloc-content">
	            			<input className="inputs" type="text" placeholder="Post title"/>
	            			<textarea className="inputs" placeholder="Description"/>
	            		</div>
	            	</div>
	            	<div className="form-bloc">
	            		<div className="form-bloc-title">
	            			<h4>Properties</h4>
	            			<p>Additional functions and attributes...</p>
	            		</div>
	            		<div className="form-bloc-content">
	            			<input className="inputs" type="text" placeholder="Tags"/>
	            			<input className="inputs" type="text" placeholder="Meta title"/>
	            			<textarea className="inputs" placeholder="Meta description"/>
	            			<input className="inputs" type="text" placeholder="Meta keywords"/>
	            		</div>
	            		<div className="switch-btn form-bloc-two">
							<input type="checkbox" hidden="hidden" id="isPublish" defaultChecked/>
							<label className="switch" for="isPublish"></label>
							<span>Publish</span>
	            		</div>
	            	</div>
	            	

	            	<div className="submit-buttons">
	            		<div className="switch-btn">
							<input type="checkbox" hidden="hidden" id="isPublish" defaultChecked/>
							<label className="switch" for="isPublish"></label>
							<span>Publish</span>
	            		</div>
	            		<div className="btns">
	            			<Button color="white">
		                        <span>Preview</span>
		                    </Button>
		                    <Button color="primary">
		                        <p>Create post</p>
		                    </Button>
	            		</div>
	            	</div>
	            </div>
			</div>
		</div>
	)
}

export default PostForm



