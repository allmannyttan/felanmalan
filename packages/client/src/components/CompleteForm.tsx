import React from 'react'
import {
  ErrorMessage,
  Field,
  FieldInputProps,
  Form,
  FormikProps,
  useFormikContext,
} from 'formik'
import styled from 'styled-components'
import CameraIcon from '../assets/camera.svg'
import CloseIcon from '../assets/close.svg'
import VideoIcon from '../assets/video.svg'
import { H4, Paragraph, PlaneButton } from './Typography'
import { IFormData } from '../pages/Complete'
import Button from './Button'

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

const CustomTextArea = ({ field, ...props }: { field: FieldInputProps<any> }) => (
  <div>
    <TextArea {...field} {...props} />
  </div>
)

const CompleteForm = () => {
  const { setFieldValue, values }: FormikProps<IFormData> = useFormikContext()
  const handleOnClickRemove = (event: React.MouseEvent<HTMLButtonElement>) =>
    setFieldValue(event.currentTarget.id, undefined)

  const handelChangeFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return
    switch (event.target.id) {
      case 'imageFile':
        setFieldValue('image', event.currentTarget.files[0])
        break
      case 'videoFile':
        setFieldValue('video', event.currentTarget.files[0])
        break
      default:
        break
    }
    return (event.target.value = '')
  }

  return (
    <Form>
      <Field name="text" as={CustomTextArea} placeholder="T.ex Lampan är trasig.." />
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
      {values.image && (
        <FileNameWrapper>
          <Paragraph>{values?.image?.name}</Paragraph>
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
      {values.video && (
        <FileNameWrapper>
          <Paragraph>{values?.video?.name}</Paragraph>
          <PlaneButton onClick={handleOnClickRemove} id="video">
            <img src={CloseIcon} alt="remove" />
          </PlaneButton>
        </FileNameWrapper>
      )}
      <ErrorMessage name="videoFile" />
      <Button
        text="Slutför felanmälan"
        disabled={Boolean(values.text || values.image || values.video)}
        to="/sammanfattning"
      />
    </Form>
  )
}

export default CompleteForm
