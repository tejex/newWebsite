import { Button } from '@mui/material'

export const ContactMe = () => {
    return (
        <div className="w-full bg-slate-950 h-56 ml-auto mr-auto mt-20">
            <div className="ml-28">
                <h1 className="font-bold text-transparent bg-gradient-to-r from-slate-300 to-slate-500 text-4xl bg-clip-text mb-5">
                    Contact Me:
                </h1>
                <Button
                    className="md:text-2xl w-auto text-white"
                    sx={{
                        textTransform: 'none',
                    }}
                >
                    <h1 className="border-cyan-100 border-2 p-5 rounded-md">
                        Say Hello : )
                    </h1>
                </Button>
            </div>
        </div>
    )
}
