import assert from 'node:assert/strict';
import { test } from 'node:test';
import { refundLabel } from '../src/refund-label.mjs';
test('merchant renders the approved refund status label', () => {
  assert.equal(refundLabel({ orderId: 'R-42', status: 'refund_pending' }), '退款处理中');
});
