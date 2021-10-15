import {
  addAssetToConsignmentMutation,
  addAssetToConsignmentMutationResponse,
  AddAssetToConsignmentSubmissionInput,
} from "v2/__generated__/addAssetToConsignmentMutation.graphql"
import { commitMutation, graphql } from "relay-runtime"

export const addAssetToConsignment = (
  relayEnvironment,
  input: AddAssetToConsignmentSubmissionInput
) => {
  return new Promise<addAssetToConsignmentMutationResponse>(
    (resolve, reject) => {
      commitMutation<addAssetToConsignmentMutation>(relayEnvironment, {
        mutation: graphql`
          mutation addAssetToConsignmentMutation(
            $input: AddAssetToConsignmentSubmissionInput!
          ) {
            addAssetToConsignmentSubmission(input: $input) {
              asset {
                submissionID
              }
            }
          }
        `,
        variables: {
          input: {
            ...input,
            clientMutationId: Math.random().toString(8),
          },
        },
        onError: reject,
        onCompleted: (response, errors) => {
          if (errors && errors.length > 0) {
            reject(new Error(JSON.stringify(errors)))
          } else {
            resolve(response)
          }
        },
      })
    }
  )
}