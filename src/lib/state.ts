export const hasOpenAIKey = () => {
    return !!sessionStorage.getItem('openAIKey');
};
