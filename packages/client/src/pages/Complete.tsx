import React from 'react'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'
import { H1 } from '../components/Typography'
import { Formik } from 'formik'
import CompleteForm from '../components/CompleteForm'

export interface IFormData {
  text?: String
  image?: File
  video?: File
}

const initialValues = {
  text: undefined,
  image: undefined,
  video: undefined,
}

const Complete = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  // const [formData, setFieldValue] = React.useState<IFormData>()

  React.useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.COMPLETE, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.SUMMARY, status: ProgressStatus.NEXT })
  }, [])

  const handleOnSubmit = (values: IFormData, action: any) => {
    console.log('submit', values)
    console.log('action', action)
    // setFieldValue(values)
  }

  return (
    <>
      <H1>Beskriv problemet</H1>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <CompleteForm />
      </Formik>
    </>
  )
}

export default Complete
