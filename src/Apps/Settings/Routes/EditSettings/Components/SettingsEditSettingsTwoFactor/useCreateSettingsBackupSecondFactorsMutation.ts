import { commitMutation, graphql } from "relay-runtime"
import { useSystemContext } from "System"
import {
  useCreateSettingsBackupSecondFactorsMutation,
  useCreateSettingsBackupSecondFactorsMutationResponse,
  CreateBackupSecondFactorsInput,
} from "__generated__/useCreateSettingsBackupSecondFactorsMutation.graphql"

export const useCreateSettingsBackupSecondFactors = () => {
  const { relayEnvironment } = useSystemContext()

  const submitCreateSettingsBackupSecondFactors = (
    input: CreateBackupSecondFactorsInput = {}
  ): Promise<useCreateSettingsBackupSecondFactorsMutationResponse> => {
    return new Promise((resolve, reject) => {
      commitMutation<useCreateSettingsBackupSecondFactorsMutation>(
        relayEnvironment!,
        {
          onError: reject,
          onCompleted: (res, errors) => {
            if (errors !== null) {
              reject(errors)
              return
            }

            resolve(res)
          },
          mutation: graphql`
            mutation useCreateSettingsBackupSecondFactorsMutation(
              $input: CreateBackupSecondFactorsInput!
            ) {
              createBackupSecondFactors(input: $input) {
                secondFactorsOrErrors {
                  ... on BackupSecondFactors {
                    __typename
                    secondFactors {
                      code
                    }
                  }
                }
              }
            }
          `,
          variables: { input },
        }
      )
    })
  }

  return { submitCreateSettingsBackupSecondFactors }
}