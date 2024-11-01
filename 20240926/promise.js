// 커피를 주문하는 프로미스 객체를 생성합니다. 생성자에는 약속을 지키기 위한 resolve와, 약속을 지키지 못했을 때를 대비한 reject 두 가지를 인자로 전달합니다.
// 프로미스 객체를 생성하는 순간 프로미스 생성자함수의 콜백 함수가 실행됩니다. 이를 실행자(executor)라 부릅니다.
const orderCoffee = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "orderCoffee.txt");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4) {
      if (requestObj.status === 200) {
        const result = requestObj.responseText;
        // resolve 메소드가 실행되면 then 메소드가 자동으로 호출됩니다.
        resolve(result);
      } else {
        // resolve 메소드 호출이 없는 상태에서 reject 메소드가 실행되면 catch 메소드가 자동으로 호출됩니다.
        reject(
          new Error(
            `커피주문이 정상적으로 이뤄지지 않았습니다.: ${requestObj.status}`
          )
        );
      }
    }
  };
  requestObj.send();
});

// 이 부분에 주목해주세요. then 메소드를 사용하면 비동기 코드를 마치 동기적인 코드처럼 작성할 수 있습니다. 앞에서 작성한 XHR 코드와 비교해보는것도 좋습니다.

// resolve 메소드가 실행될때 전달된 인자는 then 메소드의 콜백함수의 인자로 전달됩니다.
orderCoffee
  .then((asyncResult) => {
    console.log(asyncResult);
    console.log("약속이 이루어졌습니다.");
    return asyncResult;
  })
  .catch((error) => {
    // then 메소드는 프라미스 객체를 반환하기 때문에 catch 메소드를 이어서 쓰는것이 가능합니다.
    // resolve 메소드와 마찬가지로 reject 메소드가 실행될때 전달된 인자는 catch 메소드의 콜백함수의 인자로 전달됩니다.
    console.log(error);
  });
