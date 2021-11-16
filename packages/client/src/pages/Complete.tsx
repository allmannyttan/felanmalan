import React from 'react'
import { useAtom } from 'jotai'
import { reportAtom } from '../utils/atoms'
import { H1 } from '../components/Typography'
import { Formik } from 'formik'
import CompleteForm from '../components/CompleteForm'
import { useNavigate } from 'react-router-dom'

export interface IFormData {
  text?: String
  image: File | null
  video: File | null
}

export const initialValues = {
  text: '',
  image: null,
  video: null,
}

const Complete = () => {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useAtom(reportAtom)

  const handleOnSubmit = (values: IFormData) => {
    setFormValue({ ...formValue, complete: values })
    navigate('/sammanfattning')
  }

  return (
    <>
      <H1>Beskriv problemet</H1>
      <Formik initialValues={formValue.complete} onSubmit={handleOnSubmit}>
        <CompleteForm />
      </Formik>
    </>
  )
}

export default Complete
