/*
A custom hook that wrap all wishlist logic for reusability
*/

import {useEffect, useState} from "react";

// key name used in localStorage where wishlist stored in browser
const STORAGE_KEY = 'unisearch_wishlist'

export function useWishlist() {

    // When App load, check if there's saved data in localstorage
    // If yes, convert JSON string to array (since localStorage only store string)
    // if no, start with empty array []
    // use expression () => {} because this has to run only once
    // use try catch in case sth goes wrong when parsing JSON string, so if sth corrupted, it go back to empty array
    const [wishlist, setWishlist] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : []
        }catch{
            return []
        }
        }
    )

    // Sync to localStorage whenever wishlist changes
    // Everytime wishlist changes, save it to localStorage
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist))
        } catch {
            // ignore
        }
    },[wishlist])

    // for add/remove id of wishlist, if exist remove it, if not, add it.
    // e.g. [1, 2, 3]
    // toggleWishlist(2) → [1, 3]
    // toggleWishlist(4) → [1, 3, 4]

    // .includes function is to check if the id value argument exist in the wishlist array or not
    // .filter will loop through the array and only keep the value that is not equal to the argument value
    // else it will add the current id to the prev array [...prev, id] (we never modify the prev array directly, but return a new one that's why we don't use .push(id))
    const toggleWishlist = (id) => {
        setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev,  id] )
    }

    // Check if the argument id is already saved or already in the wishlist
    const isWishlisted = (id) => wishlist.includes(id)

    // For clear the wishlist array
    const clearWishlist = () => setWishlist([])

    return {wishlist, toggleWishlist, isWishlisted, clearWishlist}

    // return values so we can use this custom wishlist hook as
    // const {wishlist, toggleWishlist, isWishlisted, clearWishlist} = useWishlist()

}