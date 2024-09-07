// Support qualitys: 128k 320k flac wav

const sources: Array<{
  id: string
  name: string
  disabled: boolean
  supportQualitys: Partial<Record<LX.OnlineSource, LX.Quality[]>>
}> = [
  {
    id: 'ikun',
    name: 'ikun公益音源',
    disabled: false,
    supportQualitys: {
      kw: ['128k', '320k', 'flac', 'flac24bit', 'master'],
      kg: ['128k', '320k', 'flac', 'flac24bit', 'master'],
      tx: ['128k', '320k', 'flac', 'flac24bit', 'master'],
      wy: ['128k', '320k', 'flac', 'flac24bit', 'master'],
      mg: ['128k', '320k', 'flac', 'flac24bit', 'master'],
    },
  },
]

export default sources
