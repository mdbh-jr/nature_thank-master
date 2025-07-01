// URL Types
export type AuthUrlStrings =
  | "login"
  | "register"
  | "forgotPassword"
  | "resetPassword"
  | "updateProfile";

export type ShopUrlStrings =
  | "getProducts"
  | "getSingleProduct"
  | "getCategories"
  | "addToCart"
  | "getCart"
  | "checkout";

export type BlogUrlStrings =
  | "getPosts"
  | "getSinglePost"
  | "getBlogCategories"
  | "addComment";

export type TestUrlStrings = "fetchData" | "fetchData2";

type UrlConfig = {
  url: string;
  type: string;
};

type UrlDocType = {
  auth: {
    [key in AuthUrlStrings]: UrlConfig;
  };
  shop: {
    [key in ShopUrlStrings]: UrlConfig;
  };
  blog: {
    [key in BlogUrlStrings]: UrlConfig;
  };
  testUrl: {
    [key in TestUrlStrings]: UrlConfig;
  };
};

const urlDoc: UrlDocType = {
  auth: {
    login: {
      url: "/auth/login",
      type: "POST",
    },
    register: {
      url: "/auth/register",
      type: "POST",
    },
    forgotPassword: {
      url: "/auth/forgot-password",
      type: "POST",
    },
    resetPassword: {
      url: "/auth/reset-password",
      type: "POST",
    },
    updateProfile: {
      url: "/auth/update-profile",
      type: "PUT",
    },
  },
  shop: {
    getProducts: {
      url: "https://fakestoreapi.com/products",
      type: "GET",
    },
    getSingleProduct: {
      url: "https://fakestoreapi.com/products",
      type: "GET",
    },
    getCategories: {
      url: "/categories",
      type: "GET",
    },
    addToCart: {
      url: "/cart/add",
      type: "POST",
    },
    getCart: {
      url: "/cart",
      type: "GET",
    },
    checkout: {
      url: "/checkout",
      type: "POST",
    },
  },
  blog: {
    getPosts: {
      url: "/blog/posts",
      type: "GET",
    },
    getSinglePost: {
      url: "/blog/posts",
      type: "GET",
    },
    getBlogCategories: {
      url: "/blog/categories",
      type: "GET",
    },
    addComment: {
      url: "/blog/comments",
      type: "POST",
    },
  },
  testUrl: {
    fetchData: {
      url: "https://dummyjson.com/c/2af4-32b3-4750-8fa9",
      type: "get",
    },
    fetchData2: {
      url: "https://dummyjson.com/c/2af4-32b3-4750-8fa9",
      type: "get",
    },
  },
};

export default urlDoc;
