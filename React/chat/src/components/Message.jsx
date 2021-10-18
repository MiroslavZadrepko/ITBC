const Message = ({message}) => {
    const getTime = () => {
        let trenutno = new Date()
        let sec = trenutno.getSeconds()
        let min = trenutno.getMinutes()
        let hours = trenutno.getHours()

        let msgTime = message.time.split(':') // ['19','52','20']
        let msgSec = Number(msgTime[2])
        let msgMin = Number(msgTime[1])
        let msgHours = Number(msgTime[0])

        if(hours === msgHours){
            if(min === msgMin ){
                return sec - msgSec + 's'
            }else{
                return min - msgMin + 'min'
            }
        }else{
            return hours - msgHours + 'h'   
        }
        

    }

    return ( 
        <div style={{background:'black',color:'white',margin:'10px', padding:'10px'}}>
            <p>{message.username}</p>
            <p>{message.message}</p>
            <p>{getTime()}</p>
        </div>
     );
}
 
export default Message;