export function refundLabel(payload) {
  if (payload.status === 'refund_pending') {
    return '退款处理中';
  }
  return payload.status;
}
