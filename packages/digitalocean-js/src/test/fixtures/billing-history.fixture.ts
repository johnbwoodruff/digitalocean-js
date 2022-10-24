import { BillingHistory } from '../../index';

export const BILLING_HISTORY: BillingHistory[] = [
  {
    description: 'Invoice for May 2018',
    amount: '12.34',
    invoice_id: '123',
    invoice_uuid: 'example-uuid',
    date: '2018-06-01T08:44:38Z',
    type: 'Invoice'
  },
  {
    description: 'Payment (MC 2018)',
    amount: '-12.34',
    date: '2018-06-02T08:44:38Z',
    type: 'Payment'
  }
];
