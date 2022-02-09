import React from 'react'
import { useAtom } from 'jotai'
import { reportAtom } from '../utils/atoms'
import { H1 } from '../components/Typography'
import { Formik } from 'formik'
import CompleteForm from '../components/CompleteForm'
import { useNavigate } from 'react-router-dom'
import Section from '../components/Section'
import { IFormData } from '../utils/types'
import { FlexToStart } from '../shared-elements/layout'

const Complete = () => {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useAtom(reportAtom)

  const handleOnSubmit = (values: IFormData) => {
    setFormValue({ ...formValue, complete: values })
    navigate('/sammanfattning')
  }

  return (
    <>
      <FlexToStart>
        <H1>Beskriv problemet</H1>
      </FlexToStart>
      <Section>
        <Formik initialValues={formValue.complete} onSubmit={handleOnSubmit}>
          <CompleteForm />
        </Formik>
      </Section>
    </>
  )
}

export default Complete
