import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Container>
      <div className='container-loader'>
        <div className='loader'></div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .container-loader {
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    position: absolute;
  }

  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loader
