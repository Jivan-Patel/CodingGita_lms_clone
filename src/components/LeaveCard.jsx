import React from 'react'

function LeaveCard(props) {
    // console.log(props.data);
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-neutral-400 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                    </div>
                    <div>
                        <h3 className="font-medium text-neutral-100">{props.data.category}</h3>
                        <p className="text-sm text-neutral-400">Applied on {props.data.appliedOn}</p>
                    </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded border bg-emerald-600/20 text-emerald-300 border-emerald-700/50">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-3 h-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                    approved
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-3">
                <div className="flex items-center gap-2">
                    <svg stroke="currentColor"fill="currentColor"strokeWidth="0"viewBox="0 0 448 512"className="w-3 h-3 text-neutral-500"height="1em"width="1em"xmlns="http://www.w3.org/2000/svg">
                        <path d="M152 64h144a8 8 0 0 1 8 8v48H144V72a8 8 0 0 1 8-8zm216 48V72a56 56 0 0 0-56-56H136a56 56 0 0 0-56 56v40H24A24 24 0 0 0 0 136v320a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V136a24 24 0 0 0-24-24h-56z" />
                    </svg>
                    <span className="text-neutral_300">{props.data.fromDate} - {props.data.toDate}</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-3 h-3 text-neutral-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
                    <span className="text-neutral-300">{props.data.leaveTime} - {props.data.returnTime}</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-3 h-3 text-neutral-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
                    <span className="text-neutral-300">{((new Date(props.data.toDate) - new Date(props.data.fromDate)) / (60 * 60 * 24 * 1000))} days</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-3 h-3 text-neutral-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                    <span className="text-neutral-300">0 credits</span>
                </div>
            </div>
        </div>
    )
}

export default LeaveCard
