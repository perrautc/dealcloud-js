// import _ from 'lodash';
// import * as processDCPullAsync from "../services/process-dcpull";
// export async function getFilteredEntries(
//     client,
//     DCPulls,
//     batchSize = 10000
// ): Promise<ReadonlyArray<string>> {
//     const manyBatchedDCPulls = _
//     .chain(DCPulls)
//     .chunk(batchSize)
//     .map(f => processDCPullAsync({client, f}))
//     .value();
    
// const manyResults = await Promise.all(manyBatchedDCPulls);
// const result = _.flatten(manyResults)
// return result;
//   }