function getFirstElement<T>(arr : T[]) : T | undefined {
    if(arr.length <= 0){
        return undefined;
    }    
    return arr[0];
}

/* 
    Key와 Value를 저장할 수 있는 제네릭 인터페이스 Storage<K, V>를 만드세요.
    Storage 인터페이스를 구현하는 setItem과 getItem 함수를 작성하세요.
    setItem은 key와 value를 받아서 저장하고, getItem은 key를 받아서 해당 value를 반환합니다.
    저장된 key가 없는 경우 getItem은 undefined를 반환해야 합니다.
 */
// Generic 인터페이스 정의
interface Storages<K, V> {
    setItem(key: K, value: V): void;
    getItem(key: K): V | undefined;
}

// Storage 인터페이스를 구현한 클래스
class St<K, V> implements Storages<K, V> {
    private data: Map<K, V>; // 데이터를 저장할 Map 사용

    constructor() {
        this.data = new Map<K, V>();
    }

    setItem(key: K, value: V): void {
        this.data.set(key, value);
    }

    getItem(key: K): V | undefined {
        return this.data.get(key);
    }
}

// 사용 예시
const storage = new St<string, number>();
storage.setItem("a", 10);
console.log(storage.getItem("a")); // 10
console.log(storage.getItem("b")); // undefined


