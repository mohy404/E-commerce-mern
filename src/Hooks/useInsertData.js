import baseUrl from "../Api/baseURL";

const useInsertDataWithImage = async (url, params) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcyOGFiMmY3ODhhZjkzODBmNTNmYzEiLCJpYXQiOjE3MDY2NzY1NTIsImV4cCI6MTcxNDQ1MjU1Mn0.YpSCOE33L6fJK5OPflOuIyAYEpoi7KtW47dGwwxAhEU"}`,
            "Content-Type": "multipart/form-data"
        }
    };
    try {
        const res = await baseUrl.post(url, params, config);
        return res.data;
    } catch (error) {
        // Handle or throw the error based on your application's needs
        console.error("Error in useInsertDataWithImage:", error);
        throw error;
    }
}

const useInsertData = async (url, params) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcyOGFiMmY3ODhhZjkzODBmNTNmYzEiLCJpYXQiOjE3MDY2NzY1NTIsImV4cCI6MTcxNDQ1MjU1Mn0.YpSCOE33L6fJK5OPflOuIyAYEpoi7KtW47dGwwxAhEU"}`,
        }
    };
    try {
        const res = await baseUrl.post(url, params , config);
        return res.data;
    } catch (error) {
        console.error("Error in useInsertData:", error);
        throw error;
    }
}

export { useInsertData, useInsertDataWithImage };
