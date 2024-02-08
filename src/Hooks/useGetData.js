import baseUrl from "../Api/baseURL";

// Correctly define the function to accept `params` as an object for query parameters
const getData = async (url, params = {}) => {
    try {
        // Ensure params are passed correctly to Axios
        const response = await baseUrl.get(url, { params });
        return response.data;
    } catch (error) {
        // Consider error handling here
        console.error('Error fetching data:', error);
        throw error; // Rethrow or handle as needed
    }
}

export default getData;
