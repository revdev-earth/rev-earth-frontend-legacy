import React from 'react'
import styled from 'styled-components'

export default function ContactUs() {
  return (
    <Container>
      <Form name='contact' method='POST'>
        <Group>
          <Input type='text' name='name' placeholder='Name' required />
          <Label className='label'>Name</Label>
        </Group>

        <Group>
          <Input type='email' name='email' placeholder='Email' required />
          <Label className='label'>Email</Label>
        </Group>

        <Group>
          <TextArea name='message' placeholder='Message' required />
          <Label className='label'>Message</Label>
        </Group>

        <Button type='submit'>Send</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  padding: 4rem;
`

// const defaultColors = {
//   $primary: '#11998e',
//   $secondary: '#38ef7d',
//   $white: '#fff',
//   $gray: '#9b9b9b'
// }

const Form = styled.form`
  width: 50%;
  margin: 1rem auto 0;
`

const Group = styled.div`
  position: relative;
  margin-top: 1rem;
  padding: 15px 0 0;
  width: 100%;
`

const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #999999;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`

const TextArea = styled.textarea`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #999999;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  height: 2.4rem;
  overflow: hidden;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`

const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
`

const Button = styled.button`
  margin: 2rem auto 0;
  background-color: transparent;
  border: 2px solid #999;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  display: block;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    border-color: #11998e;
    color: #11998e;
  }
`
