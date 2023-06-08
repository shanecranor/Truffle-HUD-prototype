import { scss } from '../deps/styles';


export default scss`
//import inter
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
// .sidebar-drawer
.settings-drawer{
	font-family: 'Inter', sans-serif;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	>.settings-panel {
		text-align: center;
		&.disabled{
			display: none;
		}
		position: fixed;
	}
}
`