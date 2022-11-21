import {openDB} from 'idb'

import { Trip } from './models/Trip'


const DATABASE_NAME = "trips2"

initDB().then(()=>{
    console.log("database created!")
})

export async function insertTrip(tripInfo:Trip){
    const db = await openDB(DATABASE_NAME, 1);
    const id = await db.put("trips",tripInfo)
    return id
}


export async function getAllTrip() {
    const db = await openDB(DATABASE_NAME, 1);
    return await db.transaction("trips").objectStore("trips").getAll();
}
export async function getTripById(id: number) {
    const db = await openDB(DATABASE_NAME, 1);
    return await db.get("trips", id);
}
export async function deleteTrip(id: number) {
    const db = await openDB(DATABASE_NAME, 1);
    await db.delete('trips', id)
}


async function initDB() {
    const db = await openDB(DATABASE_NAME,1,{
        upgrade(db){
            const store = db.createObjectStore('trips',{
                keyPath: 'id',
                autoIncrement:true
            })
        }
    })
}




