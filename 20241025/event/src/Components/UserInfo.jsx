import React, { useState } from 'react'

export default function UserInfo({userName , userJob , userEmail}) {
  const [isShowDetail , setIsShowDetail] = useState(false);
  
  const onClickUserName = () => {
    setIsShowDetail(!isShowDetail)
  }

  const userDetail = () => {
    return (
      <address>
        <dl>
         <dt>Email :</dt>
         <dd>{userEmail}</dd>   
         <dt>Job :</dt>
         <dd>{userJob}</dd>
        </dl>
      </address>
    )
  }

  return (
    <>
        <li>
            <button onClick={onClickUserName}>{userName}</button>
            {isShowDetail ? userDetail()  : null}
        </li>
    </>
  )
}
