import styled from 'styled-components'

export const HeaderMain = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	overflow: hidden;

	& > * {
		pointer-events: auto;
	}
`

export const Container = styled.div`
	width: 100%;
	height: 7rem;
	transform: translateZ(0);
	color: rgba(255, 255, 255, 0.98);

	background-color: ${props => (props.basic ? props.backgroundColor : 'transparent')};

	transition: height 0.3s ease-in 0s;
`

Container.defaultProps = {
	backgroundColor: 'mediumseagreen'
}

// Menu

export const Menu = styled.div`
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	padding: 1rem 0;
`

export const ContainerButton = styled.div`
	display: flex;
	padding-left: calc(100vw / 24);
	overflow: hidden;
`

export const ButtonMenu = styled.button`
	cursor: pointer;
	display: block;
	width: auto;
	height: 2rem;
	text-align: left;
	font-size: 0;
	color: rgba(255, 255, 255, 0.98);
	color: ${props => (props.basic ? props.default.color : 'rgb(0, 30, 80)')};

	border-width: 0;
	border-style: initial;
	border-color: initial;
	border-image: initial;
	padding: 0;
	margin: 0;
	background: none;

	&:hover,
	&:focus {
		color: ${props => (props.basic ? props.active.color : 'rgb(0, 64, 197)')};
		outline: 0;
	}
`

ButtonMenu.defaultProps = {
	default: {
		color: 'rgba(255, 255, 255, 0.98)'
	},
	active: {
		color: 'rgb(76, 199, 244)'
	}
}

export const ContainerIcon = styled.div`
	display: inline-block;
`

export const ContainerText = styled.div`
	display: inline-block;
	vertical-align: text-bottom;
	height: 100%;
	box-sizing: border-box;
	padding-top: 1px;
	padding-left: 1rem;
	max-width: calc(25vw);
	overflow: hidden;
`

export const TextMenu = styled.div`
	font-family: var(--font-family-text, vw-text, Helvetica, Arial, sans-serif);
	color: inherit;
	word-break: inherit;
	font-weight: bold;
	font-size: 1em;
	line-height: 1em;
	letter-spacing: 0.04em;
	margin: 0 0 0.15rem;
`

// Line

export const BoxLine = styled.div`
	width: 100%;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	pointer-events: none;
	position: absolute;
	top: 0;
	transform: translateY(37px);
	transition: transform 0.3s ease-in 0s;
`

export const GridBoxLine = styled.div`
	display: grid;
	-webkit-box-align: center;
	align-items: center;
	width: 100%;
	--logo-size: 2rem;
	grid-template-columns: auto max-content auto;

	&::before,
	&::after {
		content: '';
		height: 0.3rem;
		background: ${props => (props.basic ? props.background : 'rgb(0, 30, 80)')};
	}
`

GridBoxLine.defaultProps = {
	background: 'rgba(255, 255, 255, 0.98)'
}

export const ContainerLogo = styled.div`
	pointer-events: auto;
	margin: 0 1rem;

	svg {
		fill: ${props => (props.basic ? props.fill : 'rgb(0, 30, 80)')};
		width: var(--logo-size);
		height: var(--logo-size);
	}
`

ContainerLogo.defaultProps = {
	fill: 'rgba(255, 255, 255, 0.98)'
}
