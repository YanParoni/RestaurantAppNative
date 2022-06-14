import { mocks,mockImages } from "../../mock/index";
import camelize from 'camelize';


export  const restaurantRequest = (location) => {
  return new Promise((resolve,reject)=>{
      const mock = mocks[location]
      if(!mock){
          reject('not found')
      }
      resolve(mock)
  })
};

export const transformData = ({results = []}) =>{

    const mapData = results.map(item=>{
        
        item.photos =item.photos.map((p)=>{
            return mockImages[Math.ceil(Math.random() * (mockImages.length -1))]
        })
        return {
            ...item,
            isClosedTemporarily: item.business_status ==="CLOSED_TEMPORARILY",
            isOpenNow: item.opening_hours?.open_now,

        }
    })
    return camelize(mapData)
}

