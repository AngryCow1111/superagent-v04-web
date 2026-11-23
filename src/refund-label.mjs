export function refundLabel(payload) {
  const labels = {
    refund_pending: '退款处理中'
  };
  return labels[payload.status] ?? payload.status;
}
