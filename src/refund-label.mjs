const STATUS_LABELS = {
  refund_pending: '退款处理中',
  refund_cancelled: '退款已取消'
};

export function refundLabel(payload) {
  if (!payload) {
    return '';
  }
  const status = payload.status;
  return STATUS_LABELS[status] || status;
}
