import React from 'react'
import styled from 'styled-components'

const text = `Informamos a nuestros visitantes que a través de este sitio web gestionado 
por Volkswagen Argentina S.A.utilizamos cookies para mejorar su experiencia online.
Las mismas se han guardado en su navegador, al acceder a esta página, de modo que puede cambiar
la política de cookies desde el mismo.Para obtener más información respecto de las cookies que
utilizamos, lo invitamos a ingresar en nuestra Política de Privacidad.`

export default function Banner() {
  return <Container>{text}</Container>
}

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`
