import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'
import { H2 } from '../components/Typography'
import { ErrorMessage, Form, Formik } from 'formik'
import styled from 'styled-components'

const TextArea = styled.textarea`
  width: 94%;
  height: 15rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  font-family: 'Arial';
  resize: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  padding: 10px;
`

const Complete = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  const [formData, setFormdata] = React.useState({
    text: '',
    video: '',
    photo: '',
  })

  useEffect(() => {
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.COMPLETE, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.SUMMARY, status: ProgressStatus.NEXT })
  }, [])

  return (
    <>
      <H2>Beskriv problemet</H2>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormdata(values)
        }}>
        <Form>
          <TextArea name="firstName" placeholder="T.ex Lampan är trasig.." />
          <ErrorMessage name="firstName" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <button>next</button>
    </>
  )
}

export default Complete
