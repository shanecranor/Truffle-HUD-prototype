import { scss } from '../deps/styles';

export default scss`
.truffle-sidebar-mouse-leave-detector{
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	z-index: 11;
}
.truffle-sidebar-mouse-enter-detector{
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	z-index: 11000;
}
.truffle-sidebar{
	position: fixed;
	top: 0;
	left: 0;
	transition: left 0.2s ease-in-out;
	height: 100%;
	width: 72px;
	background: #1f1f1f;
	z-index: 11001;
	display: flex;
	flex-direction: column;
	gap: 20px 0px;

	> .sidebar-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		&.profile-item{
			margin-top: 12px;
			>.item-container{
				width: 48px;
				height: 48px;
				background: #2f2f2f;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				>.icon{
					width: 28px;
					height: 28px;
				}
			}

		}
		&.creator-item{
			>.icon{
				width: 48px;
				height: 48px;
			}
		}
		&.embed-item{
			>.icon{
				width: 40px;
				height: 40px;
			}
		}
	}
}

.round{
	object-fit: cover;
	border-radius: 50%;
}
`;
