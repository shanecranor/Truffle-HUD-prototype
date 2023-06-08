import { scss } from '../deps/styles';

export default scss`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
.addon-window-container {
	position: fixed;
	top: 0;
}
.addon-window {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	border: 0.5px solid rgba(255, 255, 255, 0.15);
	outline: 0.25px solid rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
	background: #1F1F1F;
	
	min-width: 64px;
	min-height: 64px;
	user-select: none;
	&focused-window{
		user-select: auto;
	}
	>.title-bar{
		color: white;
		background: #171717;
		font-family: 'Inter', sans-serif;
		height: 32px;
		width:100%;
		font-weight: 600;
		font-size: 12px;
		line-height: 15px;
	
		display: flex;
		align-items: center;
		padding: 10px;
		box-sizing: border-box;
		overflow: hidden;
		flex-shrink: 0;
		flex-grow: 0;
		>.close-window-btn{
			all: unset;
			margin-left: auto;
			border: 0;
			border-radius: 0;
			background: none;
			font-size: 20px;
			color: white;
			font-family: 'Inter';
			cursor: pointer;
		}
	}
	>iframe{
		display: block;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		flex-grow: 1;
		width: 100%;
	}

}
`


