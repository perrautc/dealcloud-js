export function processDCPushAsync({ client, entryListId, DCPushs }) {
  const DCPushRequest = {
    entryListId,
    requests: {
      DCPush: DCPushs
    }
  };

  const results = await processDCPush({ client, DCPushRequest });
  return results;
}

async function processDCPush({
  client,
  DCPushRequest
}): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.ProcessDCPush(
      DCPushRequest,
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}
