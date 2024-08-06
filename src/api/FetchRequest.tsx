export const GetApiRequestToken = async (url: string) => {
  try {
    let config = {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_USER}:${process.env.NEXT_PUBLIC_REACT_APP_API_PASSWORD}`
        )}`,
      },
      next: { revalidate: 3600 },
    };
    return await fetch(url, config);
  } catch (error) {
    console.log(error);
  }
};

export const GetApiRequestWithoutToken = async (
  url: string,
  tag: string = ""
) => {
  try {
    let config = {
      method: "GET",
      headers: {},
      next: { revalidate: 3600, tags: [tag] },
    };
    return await fetch(url, config);
  } catch (error) {
    console.log(error);
  }
};

export const GetApiRequest = async (url: string, token: string) => {
  try {
    let config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 3600 },
    };
    return await fetch(url, config);
  } catch (error) {
    console.log(error);
  }
};

export const PostApiRequestWithoutToken = async (url: string) => {
  try {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const PostApiRequest = async (
  url: string,
  token: string,
  body: string
) => {
  try {
    let config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body,
      next: { revalidate: 3600 },
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const PostApiRequestBodyWithoutToken = async (
  url: string,
  body: string,
  tag: string = ""
) => {
  try {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
      next: { revalidate: 3600, tags: [tag] },
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const PostApiRequestFormData = async (
  url: string,
  token: string,
  formData: string
) => {
  try {
    let config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
      next: { revalidate: 3600 },
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const PutApiRequest = async (
  url: string,
  token: string,
  body: string
) => {
  try {
    let config = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body,
      next: { revalidate: 3600 },
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteApiRequest = async (url: string, token: string) => {
  try {
    let config = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};
