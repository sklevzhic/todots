import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {AsyncThunk, unwrapResult} from "@reduxjs/toolkit";

export const useAsyncAction = <Args extends any[], Action>(
    actionCreator: (...args: Args) => Action,
    ): ((...args: Args) => Promise<Action>) => {
    const dispatch = useDispatch<(action: any) => Promise<any>>();

    return useCallback(
        async (...args: Args) => {
            return dispatch(actionCreator(...args))
                .then(result => unwrapResult(result))
                .catch(err => Promise.reject(err))
        }, [dispatch]
    )
}


