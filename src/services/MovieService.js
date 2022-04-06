import Client from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get(
      '/discover/movie?api_key=fe37a76d5de2395204a167c545dda0bb'
    )
    return res.data
  } catch (error) {
    throw error
  }
}
