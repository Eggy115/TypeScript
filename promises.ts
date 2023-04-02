function fetchData(url: string): Promise<string> {
    return fetch(url)
        .then(response => response.text())
        .then(text => {
            console.log(`Data fetched: ${text}`);
            return text;
        });
}

fetchData("https://example.com")
    .then(data => console.log(`Data received: ${data}`));
