export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    RUNNING_LEFT: 2,
    RUNNING_RIGHT: 3,
    JUMPING_LEFT: 4,
    JUMPING_RIGHT: 5,
    FALLING_LEFT: 6,
    FALLING_RIGHT: 7,
}
class State {
    constructor(state){
        this.state = state;
    }
}
export class StandingLeft extends State {
    constructor(player){
        super('STANDING LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;
        this.player.frameX = 4;
        this.player.speed = 0;
        this.player.maxFrame = 0;
    }
    handleInput(input){
        if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
        else if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
        else if (input === 'PRESS up') this.player.setState(states.JUMPING_LEFT);
    }
}

export class StandingRight extends State {
    constructor(player){
        super('STANDING RIGHT');
        this.player = player; 
    }
    enter(){
        this.player.frameX = 0;
        this.player.frameY = 0;
        this.player.speed = 0;
        this.player.maxFrame = 4;
    
    }
    handleInput(input){
        if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
        else if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
        else if (input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT);
    }
}

export class RunningLeft extends State {
    constructor(player){
        super('RUNNING LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameX = 7;
        this.player.frameY = 5;
        this.player.maxFrame = 0;
        this.player.speed = -this.player.maxSpeed;

    }
    handleInput(input){
        if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
        else if (input === 'RELEASE left') this.player.setState(states.STANDING_LEFT);
        else if (input === 'PRESS up') this.player.setState(states.JUMPING_LEFT);
    }
}

export class RunningRight extends State {
    constructor(player){
        super('RUNNING RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frameX = 0;
        this.player.frameY = 4;
        this.player.maxFrame = 7;
        this.player.speed = this.player.maxSpeed;
    }
    handleInput(input){
        if (input === 'PRESS left') this.player.setState(states.STANDING_LEFT);
        else if (input === 'RELEASE right') this.player.setState(states.STANDING_RIGHT);
        else if (input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT);
    }
}

export class JumpingLeft extends State {
    constructor(player){
        super('JUMPING LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameX = 7;
        this.player.frameY = 7;
        this.player.maxFrame = 3;
        if (this.player.onGround()) this.player.vy -= 25;
        this.player.speed = -this.player.maxSpeed * 0.5;
    }
    handleInput(input){
        if (input == 'PRESS right') this.player.setState(states.JUMPING_RIGHT);
        else if (this.player.onGround()) this.player.setState(states.STANDING_LEFT);
        else if (this.player.vy > 0) this.player.setState(states.FALLING_LEFT);
    }
}

export class JumpingRight extends State {
    constructor(player){
        super('JUMPING RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frameX = 0;
        this.player.frameY = 6;
        this.player.maxFrame = 4;
        if (this.player.onGround()) this.player.vy -= 25;
        this.player.speed = this.player.maxSpeed * 0.5;
    }
    handleInput(input){
        if (input == 'PRESS left') this.player.setState(states.JUMPING_LEFT);
        else if (this.player.onGround()) this.player.setState(states.STANDING_RIGHT);
        else if (this.player.vy > 0) this.player.setState(states.FALLING_RIGHT);
    }
}

export class FallingLeft extends State {
    constructor(player){
        super('FALLING LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameX = 3;
        this.player.frameY = 7;
        this.player.maxFrame = 0;
    }
    handleInput(input){
        if (input == 'PRESS right') this.player.setState(states.FALLING_RIGHT);
        else if (this.player.onGround()) this.player.setState(states.STANDING_LEFT);
    }
}

export class FallingRight extends State {
    constructor(player){
        super('FALLING RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frameX = 4;
        this.player.frameY = 6;
        this.player.maxFrame = 3;
    }
    handleInput(input){
        if (input == 'PRESS left') this.player.setState(states.FALLING_LEFT);
        else if (this.player.onGround()) this.player.setState(states.STANDING_RIGHT);
    }
}