/* eslint-disable prettier/prettier */
export const fetchData = async ({ url, method = 'GET', body }: { url: string, method: string, body?: any }) => {
    try {
        const response = await fetch(url,
            {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`error fetching ${error}`);
    }
};
