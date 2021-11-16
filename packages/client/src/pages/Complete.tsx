import React from 'react'
import { useAtom } from 'jotai'
import { reportAtom, updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'
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
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  const [formValue, setFormValue] = useAtom(reportAtom)

  React.useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.COMPLETE, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.SUMMARY, status: ProgressStatus.NEXT })
  }, [])

  const handleOnSubmit = (values: IFormData, action: any) => {
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
