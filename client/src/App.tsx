import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import {Button} from "@/components/ui/button.tsx";

function App() {
    return (
        <>
            <header>
                <Show when="signed-out">
                    <SignInButton>
                        <Button>
                            SignIn
                        </Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button>SignUp</Button>
                    </SignUpButton>
                </Show>
                <Show when="signed-in">
                    <UserButton />
                </Show>
            </header>
        </>
    )
}

export default App
