import Button from '@mui/material/Button';
import { FormApi } from 'final-form';
import { TextField } from 'mui-rff';
import { Form } from 'react-final-form';
import { useAppDispatch } from '../app/hooks';
import { postMessage } from '../features/messaging/messagingSlice';

export const MessageInput = () => {
    const dispatch = useAppDispatch();

    const style = {
        marginLeft: "300px",
        display: "flex"
    };

    interface FormData {
        message: string
    }

    const handleSubmit = (values: FormData, form: FormApi<FormData, Partial<Record<string, any>>>) => {
        dispatch(postMessage(values.message))
        form.restart()
    }

    const validate = (values: FormData) => {
        if (!values.message) {
            return { message: 'Text is missing.' };
          }
          return;
    }

    return (
        <Form
            onSubmit={handleSubmit}
            //initialValues={initialValues}
            validate={validate}
            render={({ handleSubmit , values }) => (
            <form onSubmit={handleSubmit} noValidate style = { style }>
                <TextField 
                    label="Message to send" 
                    name="message" 
                    //multiline
                    maxRows={3}
                    required={true} />
                <Button type="submit" > Send </Button>
            </form>
            )}
        />
    )
}