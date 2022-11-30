import api from "./api";

const getRecipes = async () => {
    const response = await api.get('recipes')
    return response.data
}

export default getRecipes