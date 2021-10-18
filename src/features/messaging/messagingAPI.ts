import { LanguageShortName } from "../../app/supportedLanguages";
import { MessageModel } from "./MessageModel";

export function fetchTranslation(message: MessageModel, targetLanguage: LanguageShortName) {
    const fetchPromise = fetch("http://localhost:5000/translate", {
      method: "POST",
      body: JSON.stringify({
        q: message.value,
        source: message.lang,
        target: targetLanguage,
        format: "text"
      }),
      headers: { "Content-Type": "application/json" }
    });

    return fetchPromise.then((data: Response) => {
        return data.json()
    })
  }