import { scss } from '../deps/styles';

export default scss`
.truffle-sidebar-mouse-leave-detector{
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	z-index: 11;
}
.truffle-sidebar-gatekeeper{
	position: fixed;
	top: 0;
	left: 0;
	transition: left 0.2s ease-in-out;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 72px;
	z-index: 10900;
	>.truffle-logo{
		margin-top: 12px;
		width: 48px;
		height: 48px;
	}
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
			background: none;
			border: 0;
			>.icon{
				width: 40px;
				height: 40px;
			}
		}
		>.tooltip{
			visibility: hidden;
			// width: 200px;
			white-space: nowrap;
			background-color: #171717;
			border: 0.5px solid white;
			color: #fff;
			text-align: center;
			border-radius: 6px;
			padding: 10px;
			position: absolute;
			z-index: 1;
			// top: -5px;
			left: 110%;
			box-shadow: 0 10px 70px rgba(0, 0, 0, 0.35);
			&::before{
				content: " ";
				position: absolute;
				top: 50%;
				right: 100%; /* To the left of the tooltip */
				margin-top: -5px;
				border-width: 5px;
				border-style: solid;
				border-color: transparent #171717 transparent transparent;
			}
		}
		&:hover .tooltip{
			visibility: visible;
		}
	}
}

.round{
	object-fit: cover;
	border-radius: 50%;
}
`;
