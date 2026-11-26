export function refundLabel(payload) {
  return payload.status === 'refund_pending' ? '退款处理中' : payload.status;
}
