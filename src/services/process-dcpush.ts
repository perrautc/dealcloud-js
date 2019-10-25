export async function processDCPushAsync({ client, entryListId, DCPushs }): Promise<ReadonlyArray<string>> {
  const DCPushRequest = {
    entryListId,
    requests: {
      DCPush: DCPushs
    }
  };

  return processDCPush({ client, DCPushRequest });
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
