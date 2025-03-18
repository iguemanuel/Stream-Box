import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favoriteStore', {
  state: () => ({
    favorites: [] as {
      id: number
      title: string
      poster_path: string
      vote_average: number
      overview: string
    }[],
  }),

  actions: {
    // Verifica se um item já é favorito
    isFavorite(id: number) {
      return this.favorites.some((fav) => fav.id === id)
    },

    // Adiciona um favorito à lista
    addFavorite(favorite: {
      id: number
      title: string
      poster_path: string
      vote_average: number
      overview: string
    }) {
      if (!this.isFavorite(favorite.id)) {
        this.favorites.push(favorite)
      }
    },

    // Remove um favorito da lista
    removeFavorite(id: number) {
      const index = this.favorites.findIndex((fav) => fav.id === id)
      if (index !== -1) {
        this.favorites.splice(index, 1)
      }
    },

    // Atualiza a lista de favoritos após remoção
    updateFavorites() {
      // Atualiza a lista de favoritos (opcionalmente pode ser um fetch de API ou outra lógica)
    },
  },
})
