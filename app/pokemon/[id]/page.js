"use client"
import React from 'react';


export default function Page({id}) {

    console.table(id)

    return (
        <div>
            <h1>Pokemon {id}</h1>
        </div>
    )
}
