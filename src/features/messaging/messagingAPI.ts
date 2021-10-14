export function fetchTranslation(message: string) {

    const fetchPromise = fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: message,
        source: "fr",
        target: "en",
        format: "text"
      }),
      headers: { "Content-Type": "application/json" }
    });

    return fetchPromise.then((data: Response) => {
        return data.json
    })
  }