import SnackType from "./type/SnackType";
import React from "react";
import SearchResCard from "./SearchResCard";
import {CardGroup} from "react-bootstrap";



function SearchRes({isSearching,snkList} : {isSearching:boolean, snkList: SnackType[]}) {

return(
        <>
            {!isSearching ?
                (
                    <CardGroup>
                        {
                            snkList.map(item =>
                                <SearchResCard item={item}/>
                            )
                        }
                    </CardGroup>
                ) : (
                    snkList.length === 0 ?
                        (
                            <span>검색결과가 없습니다.</span>
                        ) : (
                            <CardGroup>
                                {
                                    snkList.map(item =>
                                        <SearchResCard item={item}/>
                                    )
                                }
                            </CardGroup>
                        )
                )
            }
        </>
    )
}

export default SearchRes;