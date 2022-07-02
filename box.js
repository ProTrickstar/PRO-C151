AFRAME.registerComponent("move-box", {
    schema:{
        //moveX:{type:"number",default:1},
        moveY:{type:"number",default:1},
    },
    tick: function(){
        this.data.moveY = this.data.moveY + 0.07;
        var position = this.el.getAttribute("position");
        position.y = this.data.moveY;
        this.el.setAttribute("position",{x:position.x,y:position.y,z:position.z})
    }
})