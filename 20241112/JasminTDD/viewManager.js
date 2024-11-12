class ViewManager {
  constructor(textManager, targetEls) {
    if (textManager.constructor !== TextManager) {
      throw Error("잘못된 textManager 인스턴스가 전달되었습니다.");
    }
    if (!targetEls.btnEl || !targetEls.viewerEl || !targetEls.inpEl) {
      throw Error("전달받지 못한 요소가 있습니다.");
    }

    this.inpEl = targetEls.inpEl;
    this.viewerEl = targetEls.viewerEl;
    this.textManager = textManager;

    targetEls.btnEl.addEventListener("click", () => {
      this.changeValue();
      this.updateView();
    });
  }

  changeValue() {
    this.textManager.value = this.inpEl.value;
  }

  updateView() {
    this.viewerEl.textContent = this.textManager.value;
  }
}
