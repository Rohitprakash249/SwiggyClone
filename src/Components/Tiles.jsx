import React from 'react'
import { Link } from 'react-router-dom'
import Tile from '../UiComponents/Tile'
import tilesData from "../Data.js"

export default function Tiles(props) {
    // <Tile />
    // console.log(tilesData);
 function loadTiles(item){
 return <Tile title={item.title} subtitle={item.subtitle} status={item.status} imageSource={item.imageSource} />
 }
    return (
        <>
        <div className='flex flex-wrap grid grid-cols-2 gap-x-4 gap-y-4 mx-4 my-4'>
         {tilesData.map(loadTiles)}
         </div>
        </>
    )
}
