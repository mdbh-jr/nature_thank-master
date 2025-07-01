/* eslint-disable @typescript-eslint/no-explicit-any */
import handleApiCall from "@/api/handleApiCall";

const fetchDataExample = async () => {
  console.log("Starting fetchData API call...");

  try {
    await handleApiCall({
      variant: "testUrl",
      urlType: "fetchData",
      setLoading: ({ state, msg }) => {
        console.log("Loading state:", state, msg);
      },
      cb: (data, status) => {
        console.log("API Response Status:", status);
        console.log("API Response Data:", data);

        if (status === 200) {
          console.log("Successfully fetched data!");
        } else {
          console.log("Received non-200 status code");
        }
      },
    });
  } catch (error: any) {
    console.error("Error in fetchData API call:", error);
    console.log("Error response:", error.response?.data);
    console.log("Error status:", error.response?.status);
  }
};

export default fetchDataExample;
