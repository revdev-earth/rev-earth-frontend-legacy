import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Intro from './Intro'
import Image1 from '../../static/images/milky.jpg'
import Image2 from '../../static/images/meditation.jpg'
import Image3 from '../../static/images/bamboo.jpg'
import Image4 from '../../static/images/adventure.jpg'

const imgs = [
	{
		src: Image1,
		alt: 'Milky'
	},
	{
		src: Image2,
		alt: 'meditation'
	},
	{
		src: Image3,
		alt: 'bamboo'
	},
	{
		src: Image4,
		alt: 'adventure'
	}
]

const Content = () => {
	return (
		<>
			<Intro title='Rev Earth' animation='zoom-out' img={imgs[0]} />
			<ContainerSections>
				<Section
					colsA='14'
					title='Ideas to change'
					text='Together we create our world '
					position='left'
					animation='fade-right'
					img={imgs[1]}
				/>
				<Section
					colsB='14'
					title="Rev Earth's Parts"
					text='Rev Dev - Rev Store - Rev Trade'
					position='right'
					animation='fade-left'
					img={imgs[2]}
				/>
				<Section
					title="Let's be part"
					text="Let's be conscious parts of the universe of ideas"
					position='down'
					animation='fade-up'
					positionStart='top'
					img={imgs[3]}
				/>
			</ContainerSections>
		</>
	)
}

const ContainerSections = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
`

export default Content
