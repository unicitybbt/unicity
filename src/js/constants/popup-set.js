const POPUP_SET = {
  sample: {
    type: 'default',
    content: {
      name: 'sample',
      title: 'sample_title',
      description: 'sample_description'
    },
    useCheckbox: true,
    autoClose: true
  },
  qr: {
    type: 'qr',
    content: {
      name: 'qr',
      title: 'QR 코드',
      description: 'QR 코드를 스캔하여 확인하세요'
    },
  }
}

export { POPUP_SET }