import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import {useAuth} from "../context/AuthContext"

const useGetGasto = () => {
    const {user} = useAuth();
    const [gasto, changeGasto] = useState("");
    
    useEffect(() => {
        db.collection()
    },[])

    return [gasto];
}
 
export default useGetGasto;