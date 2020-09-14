import React from 'react'
import styled from 'styled-components'
import TopFooter from './TopFooter'
import BottomFooter from './BottomFooter'
import useGetFile from '../../hooks/useGetFile'

const Footer = () => {
	const data = useGetFile('footer')
	return (
		<FooterContainer>
			<Container>
				<TopFooter blocks={data.dataTop} />
				<BottomFooter {...data.dataBottom} />
			</Container>
			<Separator />
		</FooterContainer>
	)
}

const FooterContainer = styled.footer`
	padding: 0 calc((100vw / 24) * 2);
`

const Container = styled.div`
	border-top: 2px solid rgb(0, 30, 80);

	@media (max-width: 559px) {
		padding: 3rem 0;
	}
	@media (min-width: 560px) {
		padding: 2rem calc((100vw / 24) * 1);
	}
`

const Separator = styled.div`
	@media (max-width: 559px) {
		padding: 2rem 0 1rem;
	}
	@media (min-width: 560px) {
		border-top: 1px solid rgb(223, 228, 232);
		padding-top: 4rem;
	}
`

export default Footer
