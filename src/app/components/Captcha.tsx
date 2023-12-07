import React, { useEffect, useRef , useState } from 'react'

const Captcha = () => {
    const [captch , setCaptcha] = useState("")
    const [ChangeCaptch , setChangeCaptch] = useState(false)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
                // Generate random alphanumeric string to stirng(36) creats alphanumerical characters
                const captchaText = Math.random().toString(36).substring(2, 8).toUpperCase() 
                setCaptcha(captchaText)

                // text on canvas
                ctx.fillStyle = '#ffffff'
                ctx.fillRect(0, 0, canvas.width, canvas.height)
                ctx.font = 'bold 18px Arial'
                ctx.fillStyle = '#000000'
                ctx.fillText(captchaText, 50, 25) //text-position

                // lines on canvas
                for (let i = 0; i < 6; i++) {
                    ctx.strokeStyle = '#000000'
                    ctx.beginPath()
                    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
                    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
                    ctx.stroke()
                }
            }
        }
    }, [ChangeCaptch]);

    const element =
    <div>

        <canvas ref={canvasRef} width="150" height="50"></canvas>
    </div>

    return {element , captch , setChangeCaptch}
}

export default Captcha;
