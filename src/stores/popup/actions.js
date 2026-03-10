export const actions = {
  // 중복방지를 위한 임의 난수생성
  generateId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  },
  // 팝업중복출력 방지를 위한 로직
  // closeDuplicatePopup(state, type) {
  //   console.log('[closeDuplicatePopup] excute')
  //   const existingPopup = state.popups.find(popup => popup.content.name === type);
  //   if (existingPopup) {
  //     this.removePopup(state, existingPopup.id);
  //   }
  // },
  openPopup(state, params) {
    console.log('[openPopup] ==== open::', params.content.name, '====');
    // 팝업 중복체크
    const checkDuplicate = state.popups.findIndex(popup => popup.content.name === params.content.name) === -1;
    if (!checkDuplicate) {
      console.log('[openPopup] checkDuplicate : 중복팝업으로 실행안함')
      return;
    }
    // this.closeDuplicatePopup(state, params.content.name);

    const newPopup = {
      type: params.type,
      id: this.generateId(),
      content: params.content,
      useCheckbox: params.useCheckbox,
      isOpen: true
    };

    state.popups.push(newPopup);

    // 자동닫힘
    if (params.autoClose) {
      console.log('[openPopup] params.autoClose', params.autoClose)
      setTimeout(() => {
        this.closePopup(state, newPopup.id);
      }, 800);
    }
  },
  closePopup(state, id) {
    console.log('[closePopup] excute')
    const popup = state.popups.find(p => p.id === id);
    if (popup) {
      popup.isOpen = false;
      this.removePopup(state, id);
    }
  },
  removePopup(state, id) {
    console.log('[removePopup] excute')
    state.popups = state.popups.filter(p => p.id !== id);
  },
  /**
   * @desc 팝업 전체 제거 (단, dataReceiveError 팝업은 제외) - 유저액션이 반드시 필요할경우
   * @param {*} state
   */
  removeAllPopup(state) {
    const exceptPopupNameList = ['dataReceiveError'];
    if (state.popups.length > 0) {
      state.popups = state.popups.filter(p => exceptPopupNameList.includes(p.content.name));
    }
  },
  closePopupByInfo(state, popupInfo) {
    console.log('[closePopupByInfo] ==== close::', popupInfo.content.name, '====')
    const popup = state.popups.find(p => p.content.description === popupInfo.content.description);
    if (popup) {
      popup.isOpen = false;
      this.removePopup(state, popup.id);
    }
  }
}
