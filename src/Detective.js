import React from "react";
import {useState} from "react";

export default function Detective() {
    const [sherlock, setSherlock] = useState("психопат");
    return (
        <did>Шерлок {sherlock}</did>
    )
}