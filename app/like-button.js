"use client"
import { useState } from "react"

export default function LikeButton() {
    const [like, setLike] = useState(0)
    const handleClick = () => {
        setLike(like + 1)
    }
    return <button onClick={handleClick}>Like {like}</button>
}
