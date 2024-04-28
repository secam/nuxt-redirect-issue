import { sendProxy } from 'h3'
import { stringifyQuery } from 'ufo'

export default defineEventHandler(
    async (event) => {
        const config = useRuntimeConfig()
        const asset = event?.context?.params?.id
        const query = getQuery(event)
        return sendProxy(event, `https://cloud.squidex.io/api/assets/kinooko/${asset}?${stringifyQuery(query)}`)
    }
)