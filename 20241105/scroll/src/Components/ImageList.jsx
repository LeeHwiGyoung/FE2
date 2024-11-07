import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ImageListItem from './ImageListItem';
import useIsBottom from '../Hook/useIsBottom';
import loadingGif from '../asset/loading.gif'

export default function ImageList() {
  const isBottom = useIsBottom();
  const [imgList , setImgList] = useState([]);
  const [page,setPage] = useState(1);
  const [loading , setLoading] = useState(true);
  const limit = 10;

  useEffect(()=> {
    async function getImgData () {
        try{
            const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
            if(!res.ok){
                throw new Error('Newwork Error')
            }
            const json = await res.json();
            setImgList((prev)=> [...prev, ...json]); 
          
        }catch(err){
            console.error(err)
        }finally{
            setLoading(false);   
        }
    }

    setLoading(true)
    getImgData()    
    
  }, [page])

  useEffect(()=> {
    if(!isBottom) {
        return; 
    }
    setPage((prev)=> prev+1);
  }, [isBottom])

  const makeItem = () => {
    return imgList.map((img)=> {
        return (
          <li key={img.id}>
            <ImageListItem  src={img.download_url} alt={`${img.author}의 이미지`}/>
          </li>
        )
    })
  }

  
  return (
    <ul>
      {makeItem()}
      { loading && <img src={loadingGif} alt="로딩이미지" /> }
    </ul>
  )
}
