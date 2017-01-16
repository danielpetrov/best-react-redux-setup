import React from 'react'

const row1 = '░░░404░░░░░▄▄▄▄░░░│▗▝ ▞ ▝ ˄---˄'
const row2 = '░not found░░░▄▄▄▄░░~│ ▞  ▞ ❬.◕‿‿◕.❭’'
const row3 = '░░░:(░░░░░▄▄▄▄░░░░░ `w-w---- w w'

const NotFound = () =>
    <h1 className="not-found">
        <div>{row1}</div>
        <div>{row2}</div>
        <div>{row3}</div>
    </h1>

export default NotFound
