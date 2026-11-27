// 注意：STATUS_LABELS 的键是退款接口返回的状态值（机器可读契约），
// 值是商家后台的展示文案（人可读 UI 字符串），两者是两回事，不可混用或互相替换。
// 维护时新增状态先对照接口约定的状态枚举，再补对应展示文案。
const STATUS_LABELS = {
  // refund_pending / refund_cancelled 为接口约定状态，文案仅用于展示，修改文案不影响接口状态。
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
