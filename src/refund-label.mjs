const STATUS_LABELS = {
  refund_pending: '退款处理中'
};

export function refundLabel(payload) {
  if (!payload) {
    return '';
  }
  return STATUS_LABELS[payload.status] || payload.status;
}
