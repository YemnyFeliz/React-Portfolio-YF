//It takes a relative path which we pass
//then takes the base URL and appends relative path onto it
//makes it easier to import images into components

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};