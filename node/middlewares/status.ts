// export async function status(ctx: Context, next: () => Promise<any>) {
//   const {
//     state: { code },
//     clients: { status: statusClient },
//   } = ctx

//   console.info('Received code:', code)

//   const statusResponse = await statusClient.getStatus(code)

//   console.info('Status response:', statusResponse)

//   const {
//     headers,
//     data,
//     status: responseStatus,
//   } = await statusClient.getStatusWithHeaders(code)

//   console.info('Status headers', headers)
//   console.info('Status data:', data)

//   ctx.status = responseStatus
//   ctx.body = data
//   ctx.set('Cache-Control', headers['cache-control'])

//   await next()
// }

export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { catalog },
  } = ctx

  const data = await catalog.getSkuById(code.toString())
  ctx.body = data

  await next()
}