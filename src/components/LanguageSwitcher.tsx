import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import supportedLanguages, { LanguageShortName } from "../app/supportedLanguages";
import { changeLanguage,getTranslationAsync,selectAllMessages,selectCurrentLanguage } from "../features/messaging/messagingSlice";


export const LanguageSwitcher = () => {
    const dispatch = useAppDispatch();

    const messages = useAppSelector(selectAllMessages)
    const selectedLanguage = useAppSelector(selectCurrentLanguage)

    const handleChange = (event: SelectChangeEvent) => {
      const currentLanguage = event.target.value as LanguageShortName
      dispatch(changeLanguage(currentLanguage))
      translate(currentLanguage)
    };

    const translate = (language: LanguageShortName) => {
        dispatch(getTranslationAsync({message: messages[0] , targetLanguage: language}))
    }

    const renderMenuItems = () => {
        let menuItems = []

        for (const key in supportedLanguages) {
            menuItems.push(<MenuItem key={key} value={key as LanguageShortName}>
                {supportedLanguages[key as LanguageShortName]}
            </MenuItem>)
        }
        return menuItems
    }
  
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="select-label">Language</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    value={selectedLanguage}
                    label="Language"
                    onChange={handleChange}
                    >
                    { renderMenuItems() }
                </Select>
            </FormControl>
            <Button onClick={() => {
                translate(selectedLanguage)
            }}> Traduire </Button>
        </>
    );
}