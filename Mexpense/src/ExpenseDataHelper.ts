import {openDB} from 'idb'
import { Expense } from './models/Expense'

const DATABASE_NAME = "tripexpense"

initDB().then(()=>{
    console.log("database created!")
})
async function initDB() {
    const db = await openDB(DATABASE_NAME,1,{
        upgrade(db){
            const store = db.createObjectStore('tripexpense',{
                keyPath: 'id',
                autoIncrement:true
            })
        }
    })
}

export async function insertExpense(expenseInfor:Expense){
    const db = await openDB(DATABASE_NAME, 1);
    const id = await db.put("tripexpense",expenseInfor)
    return id
}

export async function getAllExpense() {
    const db = await openDB(DATABASE_NAME, 1);
    return await db.transaction("tripexpense").objectStore("tripexpense").getAll();
}

export async function getExpenseById(id: number) {
    const db = await openDB(DATABASE_NAME, 1);
    return await db.get("tripexpense", id);
}
export async function deleteExpense(id: number) {
    const db = await openDB(DATABASE_NAME, 1);
    await db.delete('tripexpense', id)
}