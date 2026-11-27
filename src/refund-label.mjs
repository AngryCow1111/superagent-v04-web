// 注意：STATUS_LABELS 的键是退款接口的状态值，值是展示文案，两者是两回事，不可混用。
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
