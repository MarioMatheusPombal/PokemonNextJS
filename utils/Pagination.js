'use client'
import Pagination from 'react-bootstrap/Pagination';
import Link from "next/link";


function PaginationPokeList({number}) {

    const convertToNumber = (number) => {
        return Number(number);
    }


    return (
        <Pagination>
            <Pagination.First href={`/pokemon/list/${1}`}/>
            <Pagination.Prev href={`/pokemon/list/${convertToNumber(number) - 1}`}/>
            <Pagination.Item>
                <a>{number}</a>
            </Pagination.Item>
            <Pagination.Next href={`/pokemon/list/${convertToNumber(number) + 1}`}/>
            <Pagination.Last/>
        </Pagination>
    );
}

export default PaginationPokeList;