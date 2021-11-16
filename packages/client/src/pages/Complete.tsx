import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'
import { H2, H4, Paragraph, PlaneButton } from '../components/Typography'
import { ErrorMessage, Form, Formik } from 'formik'
import CloseIcon from '../assets/close.svg'
import CameraIcon from '../assets/camera.svg'
import VideoIcon from '../assets/video.svg'
import styled from 'styled-components'

const TextArea = styled.textarea`
  width: 94%;
  height: 15rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  resize: none;
  color: black;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 30px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

const FileNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 26px;
`

const FileLabel = styled.label`
  background-color: ${({ theme }) => theme.colors.white};
  color: black;
  border-radius: 33px;
  border: ${({ theme }) => `1px solid ${theme.colors.lightOrange}`};
  cursor: pointer;
  padding: 0.6rem 0;
  font-weight: 700;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin-bottom: 20px;

  input[type='file'] {
    display: none;
  }

  img {
    margin-left: 28px;
  }
`

interface IFormData {
  text?: String
  image?: File
  video?: File
}

const Complete = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  const [formData, setFormdata] = React.useState<IFormData>({
    text: '',
    image: undefined,
    video: undefined,
  })

  useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.COMPLETE, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.SUMMARY, status: ProgressStatus.NEXT })
  }, [])

  const handleOnClickRemove = (event: React.MouseEvent<HTMLButtonElement>) =>
    setFormdata({ ...formData, [event.currentTarget.id]: undefined })

  const handelChangeFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return
    switch (event.target.id) {
      case 'imageFile':
        setFormdata({ ...formData, image: event.currentTarget.files[0] })
        break
      case 'videoFile':
        setFormdata({ ...formData, video: event.currentTarget.files[0] })
        break
      default:
        break
    }
    return (event.target.value = '')
  }

  useEffect(() => {
    console.log('form data', formData)
  }, [formData])

  return (
    <>
      <H2>Beskriv problemet</H2>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormdata(values)
        }}>
        <Form>
          <TextArea name="text" placeholder="T.ex Lampan är trasig.." />
          <ErrorMessage name="firstName" />
          <FileLabel>
            <img src={CameraIcon} alt="Camera Icon" />
            <H4>Ladda upp bild</H4>
            <input
              id="imageFile"
              name="imageFile"
              type="file"
              accept="image/*"
              onChange={handelChangeFileInput}
            />
          </FileLabel>
          {formData.image && (
            <FileNameWrapper>
              <Paragraph>{formData?.image?.name}</Paragraph>
              <PlaneButton onClick={handleOnClickRemove} id="image">
                <img src={CloseIcon} alt="remove" />
              </PlaneButton>
            </FileNameWrapper>
          )}
          <FileLabel>
            <img src={VideoIcon} alt="Video Icon" />
            <H4>Ladda upp Video</H4>
            <input
              id="videoFile"
              name="videoFile"
              type="file"
              accept="video/*"
              onChange={handelChangeFileInput}
            />
          </FileLabel>
          {formData.video && (
            <FileNameWrapper>
              <Paragraph>{formData?.video?.name}</Paragraph>
              <PlaneButton onClick={handleOnClickRemove} id="video">
                <img src={CloseIcon} alt="remove" />
              </PlaneButton>
            </FileNameWrapper>
          )}
          <button type="submit">Slutför felanmälan</button>
        </Form>
      </Formik>
      <button>next</button>
    </>
  )
}

export default Complete
