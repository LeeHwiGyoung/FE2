describe("텍스트 관리자 테스트 모읍입니다.", () => {
  const textManager = new TextManager();

  it("관리하고 있는 텍스트 값을 반환합니다.", () => {
    const initValue = textManager.value;
    expect(textManager.value).toBe(initValue);
  });

  it("관리하고 있는 텍스트 값을 수정합니다.", () => {
    const newValue = { data: "hello weniv" };
    textManager.value = newValue.data;
    expect(textManager.value).toBe(newValue.data);
  });
});
