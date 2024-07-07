export function drawStatusText(context, input, player){
    context.front = '30px Helvetica';
    context.fillText ('Last Input: ' + input.lastKey, 20, 50)
    context.fillText ('Active State: ' + player.currentState.state, 20, 100)
    context.fillText ('Frame State: ' + player.frameX , 20, 150)
}