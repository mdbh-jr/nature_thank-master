/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import urlDoc, {
  AuthUrlStrings,
  BlogUrlStrings,
  ShopUrlStrings,
  TestUrlStrings,
} from "./urlDoc";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const ecartUrl = process.env.NEXT_PUBLIC_ECART_API_URL;

type IVariant = "auth" | "testUrl" | "shop" | "blog";

type IUrlType =
  | AuthUrlStrings
  | TestUrlStrings
  | ShopUrlStrings
  | BlogUrlStrings;

type ApiUrlConfig = {
  url: string;
  type: string;
};

type VariantDocs = {
  [key in IUrlType]: ApiUrlConfig;
};

type IHandleApiCall = {
  variant?: IVariant;
  urlType: IUrlType;
  data?: any;
  params?: any;
  cb?: (data: any, state: number) => void;
  setLoading?: ({ state, msg }: { state: boolean; msg: string }) => void;
  urlParams?: string;
  auth?: boolean;
  user?: any;
};

const handleApiCall = ({
  variant = "auth",
  urlType,
  data,
  params,
  cb = (data: any, state: number) => {
    console.log(data, state);
  },
  setLoading = ({ state, msg }) => {
    console.log(state, msg);
  },
  urlParams = "",
  auth,
}: IHandleApiCall) => {
  const variantDoc = urlDoc[variant] as VariantDocs;
  const urlConfig = variantDoc[urlType];

  if (!urlConfig) {
    throw new Error(`Invalid urlType '${urlType}' for variant '${variant}'`);
  }

  const isAbsoluteUrl = urlConfig.url.startsWith("http");
  const url = isAbsoluteUrl
    ? urlConfig.url
    : `${variant === "shop" ? ecartUrl : baseUrl}${urlConfig.url}${urlParams}`;

  const method = urlConfig.type;

  async function handleCall() {
    setLoading({
      state: true,
      msg: "Loading..",
    });

    try {
      const response: AxiosResponse = await axios({
        method,
        url,
        data,
        params,
        headers: {
          "Content-Type": "application/json",
          Authorization: auth
            ? `Bearer ${localStorage.getItem("accessToken")}`
            : "",
        },
      });

      setLoading({
        state: false,
        msg: "Loading..",
      });

      return cb(response.data, response.status);
    } catch (error: unknown) {
      setLoading({
        state: false,
        msg: "Loading..",
      });
      if (error && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError;

        cb(axiosError.response, axiosError.response?.status || 500);

        const errorMessage = (
          axiosError.response?.data as { message?: string | string[] }
        )?.message;
        if (Array.isArray(errorMessage)) {
          errorMessage.forEach((msg: string) => {
            toast.error(msg);
          });
        } else if (typeof errorMessage === "string") {
          toast.error(errorMessage);
        }
      } else {
        toast.error("An unexpected error occurred.");
        cb(error, 500);
      }

      throw error;
    }
  }

  return handleCall();
};

export default handleApiCall;
