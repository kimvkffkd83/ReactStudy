import SearchBar from "./SearchBar";
import SearchRes from "./SearchRes";
import React, {ChangeEvent, useState} from "react";
import SnackType from "./type/SnackType";
import axios from "axios";


function SearchComponent(){
    const [sName, setSName] = useState<string>('');

    const getSerachData = (e:ChangeEvent<HTMLInputElement>)=>{
        setSName(e.target.value.trim());

        if (sName.length <= 1) {
            setIsSearching(false);
        }
    }

    const [snkList, setSnkList] = useState<SnackType[]>([]);

    const [isSearching, setIsSearching] = useState<boolean>(false);

    const getSnacksByName = async ( sName : string ) => {
        const param = {"sName": sName};
        return axios.post<SnackType[]>(`/api/getSnacksByName`, param);
    }
    const onClickSearchInput = async (e: React.MouseEvent) =>{
        e.preventDefault();
        const res = await getSnacksByName(sName);
        setSnkList(res.data);
        setIsSearching(true);
    }
     return(
         <>
            <SearchBar sName={sName} changeEvent={getSerachData} clickEvent={onClickSearchInput}/>
            <SearchRes isSearching={isSearching} snkList={snkList}/>
         </>
     )
}

export default SearchComponent;