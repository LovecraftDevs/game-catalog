import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { TextFieldElement, useForm } from "react-hook-form-mui"
import { useNavigate } from "react-router-dom"
import { useAuthService } from "../../services/authService"

export const Login = () => {
    const authService = useAuthService()
    const navigate = useNavigate()

    const { control, handleSubmit, setError, formState: { errors } } = useForm<{
        email: string, password: string, error?: string
    }>({
        defaultValues: {
            email: ''
        }
    })

    const [isOnLoad, setIsOnLoad] = useState(false)

    const submit = () => {
        console.log("submit", control._formValues)
        setIsOnLoad(true)
        authService.login(control._formValues.email, control._formValues.password).then((res) => {
            console.log(res, authService.auth)
            navigate("/")
        }).catch((err) => {
            setError("error", {
                message: err.message,
                type: "value",
            })
        }).finally(() => {
            setIsOnLoad(false)
        })
    }

    return (<Box>
        <Typography>Login</Typography>
        <form onSubmit={handleSubmit(submit)} noValidate>
            <Stack gap={1}>
                <TextFieldElement disabled={isOnLoad} name={"email"} type="email" control={control} required />
                <TextFieldElement disabled={isOnLoad} name={"password"} type="password" control={control} required />
                <Button type="submit" disabled={isOnLoad}>Submit</Button>
                {errors.error && <p role="alert">{errors.error!.message}</p>}
            </Stack>
        </form>
    </Box >)
}