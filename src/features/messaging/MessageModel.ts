import { LanguageShortName } from "../../app/supportedLanguages"

export class MessageModel {
    date!: number
    value!: string
    lang!: LanguageShortName
    translation?: Record<LanguageShortName, string>  

    constructor(message: string, lang: LanguageShortName) {
        this.date = new Date().getTime()
        this.value = message
        this.lang = lang
    }
}