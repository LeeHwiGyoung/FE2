import styled from "styled-components";

const CardDivOne = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: 200px;
`;


const CardDivTwo = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: 400px;
  `;

const CardDiv = styled.div`
    padding : 20px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    margin-bottom: 20px;
    width: ${(props)=> props.className === 'setting' ?  '200px' : '400px' };
`

export const Card = (props) => {
    const {className , title ,children} = props;
    return (
        <CardDiv className={className}>
            <h3>{title}</h3>
            <hr/>
            <div>
                {children}
            </div>
        </CardDiv>
    )
}

export const CardOne = (props) => {
  return (
    <>
      <CardDivOne>
        <h3>챌린지 설정</h3>
        <hr />
        <button>초기화</button>
        <button>저장하기</button>
      </CardDivOne>
    </>
  );
};

export const CardTwo = (props) => {
  return (
    <>
      <CardDivTwo>
        <h3>서비스 공유하기</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
          eveniet, laudantium, deleniti autem sequi molestias magni quia,
          aliquam et praesentium nostrum dolores culpa cupiditate unde
          doloremque labore beatae accusamus.
        </p>
        <div>
          <button>이미지 저장</button>
          <button>트위터</button>
          <button>페이스북</button>
        </div>
      </CardDivTwo>
    </>
  );
};

export const Settingcard = (props) => {
    return (
        <>
            <button>초기화</button>
            <button>저장하기</button>
        </>
    )
}

export const ShareCard = () => {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
          eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
          et praesentium nostrum dolores culpa cupiditate unde doloremque labore
          beatae accusamus.
        </p>
        <div>
          <button>이미지 저장</button>
          <button>트위터</button>
          <button>페이스북</button>
        </div>
      </>
    );
  };
