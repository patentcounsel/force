import { useEffect, useState } from "react"
import { Environment, fetchQuery, GraphQLTaggedNode } from "react-relay"
import {
  CacheConfig,
  FetchQueryFetchPolicy,
  OperationType,
} from "relay-runtime"
import { useSystemContext } from "System/useSystemContext"

export const useClientQuery = <T extends OperationType>({
  environment,
  query,
  variables = {},
  cacheConfig = {},
  skip = false,
}: {
  environment?: Environment
  query: GraphQLTaggedNode
  variables?: T["variables"]
  cacheConfig?: {
    networkCacheConfig?: CacheConfig | null | undefined
    fetchPolicy?: FetchQueryFetchPolicy | null | undefined
  } | null
  skip?: boolean
}) => {
  const { relayEnvironment } = useSystemContext()

  const [data, setData] = useState<T["response"] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (skip || data || error) return

    const exec = async () => {
      try {
        const res = await fetchQuery<T>(
          (environment || relayEnvironment)!,
          query,
          variables,
          cacheConfig
        ).toPromise()

        setData(res)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    exec()

    // https://github.com/facebook/react/issues/25149
    // Excludes `T`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, query, relayEnvironment, variables])

  return { data, error, loading: skip ? false : loading }
}
