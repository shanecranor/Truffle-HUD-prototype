import { scss } from '../deps/styles';

export default scss`
.truffle-sidebar-mouse-leave-detector{
	pointer-events: none;
	&.is-open {
		pointer-events: all;
		position: fixed;
		top: 0;
		&.config-right{
			left: 0;
		}
		&.config-left{
			right: 0;
		}
		height: 100%;
		z-index: 11;
	}
}
.truffle-sidebar-gatekeeper{
	&.disabled{
		display: none;
	}
	position: fixed;
	top: 0;
	&.config-right{
		right: 0;
		transition: right 0.2s ease-in-out;
	}
	&.config-left{
		left: 0;
		transition: left 0.2s ease-in-out;
	}
	
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 11001;
	>.truffle-logo{
		margin-top: 12px;
		// width: 48px;
		// height: 48px;
		z-index: 19000
	}
}
.truffle-sidebar-mouse-enter-detector{
	position: fixed;
	top: 0;
	&.config-right{
		right: 0;
	}
	&.config-left{
		left: 0;
	}
	height: 100%;
	z-index: 11000;
}
.truffle-sidebar{
	position: fixed;
	top: 0;
	&.config-right{
		right: 0;
		transition: right 0.2s ease-in-out;
	}
	&.config-left{
		left: 0;
		transition: left 0.2s ease-in-out;
	}

	height: 100%;
	background: #1f1f1f;
	z-index: 11002;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px 0px;

	> .separator-item{
		height: 2px;
		background: rgba(255, 255, 255, 0.08);
		padding: 0;
		// margin-top: -10px; /* Adapt 20px gap to 5px */
		// margin-bottom: -10px;
	}
	>.current-creator-embed-folder {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 8px 0px;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 14px;
	}
	>.sidebar-item, .current-creator-embed-folder >.sidebar-item{ 
		padding: 0;
		outline: none;
		background: none;
		border: 0;
		display: flex;
		&.profile-item{
			margin-top: 12px;
			>.item-container{
				background: #2f2f2f;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		}
		&.creator-item{
			
			>img{
				&.creator-is-live{
					&.platform-youtube{ 
						outline: 2px solid #E53333;
					}
					&.platform-twitch{ 
						outline: 2px solid #6441a5;
					}
				}
			}
			&.creator-is-live{
				display: flex;
				flex-direction: column;
				align-items: center;
				&::after{
					content: "LIVE";
					font-family: 'Inter', sans-serif;
					font-size: 10px;
					padding:2px;
					color: white;
					border-radius: 4px;
					margin-top: -4px;
				}
				&.platform-twitch::after{
					background: #6441a5;
				}
				&.platform-youtube::after{
					background: #E53333;
				}
			}
		}
		>.tooltip{
			visibility: hidden;
			white-space: nowrap;
			background-color: #171717;
			color: #fff;
			text-align: center;
			border-radius: 6px;
			padding: 10px;
			position: absolute;
			z-index: 1;
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
