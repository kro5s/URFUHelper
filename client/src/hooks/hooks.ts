import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import React, {useEffect, useMemo} from "react";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useCloseByClickingOutside = (flag: boolean, handler: React.Dispatch<React.SetStateAction<boolean>>, parent: React.MutableRefObject<null>) => {
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            // @ts-ignore
            if (flag && !parent.current?.contains(e.target)) handler(false)
        })

        return document.body.addEventListener("click", (e) => {
            // @ts-ignore
            if (flag && !parent.current?.contains(e.target)) handler(false)
        })
    }, [flag])
}