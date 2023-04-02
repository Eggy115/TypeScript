async function fetchData(url: string): Promise<string> {
    const response = await fetch(url);
    const text = await response.text();
    console.log(`Data fetched: ${text}`);
    return text;
}

async function main() {
    const data = await fetchData("https://example.com");
    console.log(`Data received: ${data}`);
}

main();
