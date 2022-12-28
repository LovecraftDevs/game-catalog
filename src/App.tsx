import { CircularProgress, Stack } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useRef, useState } from "react"
import { Await, Outlet } from "react-router-dom"
import { Router } from "./Router"
import { useAuthService } from "./services/authService"

export const App = () => {
    const hasInitialized = useRef(false)
    const [onLoading, setOnLoading] = useState(true)
    const authService = useAuthService()

    useEffect(() => {
        !hasInitialized.current && init()
    }, [hasInitialized])

    const init = async () => {
        hasInitialized.current = true
        await new Promise<void>((res) => {
            setTimeout(() => {
                res()
            }, 1000)
        })
        setOnLoading(false)
    }

    return (
        <Stack sx={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#24AC51", padding: 2 }} alignItems={"center"}>
            {onLoading ? <CircularProgress /> : <Outlet />}
        </Stack>
    )
}