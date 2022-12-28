import { Box, Typography } from "@mui/material"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthService } from "../../services/authService"
import { GameTable } from "./gameTable"

export const Home = () => {
    const hasInitialized = useRef(false)
    const authService = useAuthService()
    const navigate = useNavigate()

    useEffect(() => {
        !hasInitialized.current && init()
    }, [hasInitialized.current])

    const init = async () => {
        hasInitialized.current = true
        if (!authService.isConnected()) {
            navigate("/login")
        }
    }

    return (
        <Box>
            <Typography>Home</Typography>
            <GameTable />
        </Box>
    )
}