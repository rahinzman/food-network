'use client'
import { useState } from "react";


const useDisclosure = () => {
    const [FoodsItemClicked, setFoodsItemClicked] = useState<boolean>(false)
    
    const [value, setValue] = useState<number[]>([15])
    return {FoodsItemClicked, setFoodsItemClicked, value, setValue};
}

export default useDisclosure