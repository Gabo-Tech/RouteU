import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../../features/routes/routesSlice";
import { Button, Form, Input } from 'antd';
const { TextArea } = Input;

const AddComment = ({routeId}) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        setFormData((pre) => ({...pre, routeId}))
        // eslint-disable-next-line        
    }, []);

    const [formData, setFormData] = useState({
        routeId:'',
        body:''
    })

    const { comment } = formData;   

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const onSubmit = (e) => {
      
        e.preventDefault()
        dispatch(addComment(formData))
    }

    return (
      <>
        <Form.Item>
          <TextArea
            rows={4}
            onChange={onChange}
            value={comment}
            name='body'
            type='text'
          />
        </Form.Item>
        <Form.Item>
          <Button  onClick={onSubmit} type='submit'>
            Add Comment
          </Button>
        </Form.Item>
      </>       
    );
}

export default AddComment;