import Stack from "@mui/material/Stack"
import { useAppSelector } from "../../app/hooks"
import { selectAllMessages } from "./messagingSlice"
import { Properties } from 'csstype'
import styles from './Message.module.css'
import { useEffect } from "react"

type MessageItemProps = {
    children?: React.ReactNode;};

const MessageItem = ({children}: MessageItemProps) => {

    const style : Properties = {
        marginRight: "20px",
        textAlign: "right",
        borderRadius: "20px",
    }

    return (
        <div className={styles.messageItem} style={style}>
            {children}
        </div>
    )
}

export const MessageList = () => {

    useEffect(() => {    
        const stack = document.getElementById('App-container');
        if (stack) {
            stack.scrollTop = stack.scrollHeight 
        }

    });
    const messages = useAppSelector(selectAllMessages)

    const renderMessage = () => {
        return messages.map((message) => {
            return (
                <MessageItem key={message.date}>
                    {message.value}
                </MessageItem>
            )
        })
    }

    return (
        <div id="messagesStack" className={ styles.stack }>
            <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={2}
             >
                { renderMessage() }
            </Stack>
        </div>
    )
}