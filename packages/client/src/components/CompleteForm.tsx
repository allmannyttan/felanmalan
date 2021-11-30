import React from 'react'
import { Field, FieldInputProps, Form, FormikProps, useFormikContext } from 'formik'
import styled from 'styled-components'
import CameraIcon from '../assets/camera.svg'
import CloseIcon from '../assets/close.svg'
import VideoIcon from '../assets/video.svg'
import { H4, Paragraph } from './Typography'
import { IFormData } from '../pages/Complete'
import { StyledBtn } from './Button'

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
const PlaneButton = styled.button`
  border: none;
  background-color: inherit;
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
  border: ${({ theme }) => `1px solid ${theme.colors.paleOrange}`};
  cursor: pointer;
  padding: 0.6rem 0;
  font-weight: 700;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin-bottom: 20px;
  width: inherit;

  input[type='file'] {
    display: none;
  }

  img {
    margin-left: 28px;
  }
`
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  margin-bottom: 4rem;
  width: 100%;
`

const CustomTextArea = ({ field, ...props }: { field: FieldInputProps<any> }) => (
  <TextArea {...field} {...props} />
)

const CompleteForm = () => {
  const { setFieldValue, values }: FormikProps<IFormData> = useFormikContext()
  const handleOnClickRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFieldValue(event.currentTarget.id, null)
  }
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
    <StyledForm>
      <Field name="text" as={CustomTextArea} placeholder="T.ex Lampan är trasig.." />
      <Wrapper>
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
      </Wrapper>
      <StyledBtn
        type="submit"
        disabled={values.text || values.image || values.video ? false : true}>
        Slutför felanmälan
      </StyledBtn>
    </StyledForm>
  )
}

export default CompleteForm
