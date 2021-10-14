// A mock function to mimic making an async request for data
export function fetchTranslation(message: string) {
    return new Promise<{ data: string }>((resolve) =>
      setTimeout(() => resolve({ data: message }), 500)
    );
  }