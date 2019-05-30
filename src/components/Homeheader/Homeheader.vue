<template>
<div class="box">
    <div class="header">
        <img src="../../assets/老虎.png">
        <p class="logop">Tiger Music</p>
    </div>
    <div class="choose">
        <ul>
            <router-link tag="li" to="/Recommend"><p class="lip" >推荐</p></router-link>
            <router-link tag="li" to="/Singer"><p class="lip">歌手</p></router-link>
            <router-link tag="li" to="/Ranking"><p class="lip">排行</p></router-link>
            <router-link tag="li" to="/Search"><p class="lip">搜索</p></router-link>
        </ul>
    </div>
 </div>   
</template>
<script>
export default {
    name:'Homeheader',
    mounted() {
        var allp =document.getElementsByClassName('lip');
        for(var i=0;i<allp.length;i++){
            allp[i].onclick=function(){
                for(var j=0;j<allp.length;j++){
                    allp[j].style.color='#909399';
                    allp[j].style.border='none';
                }
                this.style.color='orange';
                this.style.borderBottom='2px solid orange';
            }
        }
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.box{
    height: 100px;
    background-color:#222;
    color: orange;
}
.header{
    width: 100%;
    height: 50px;
    overflow: hidden;
   display: flex;
   text-align: center;
   flex-direction: row;
   align-items: center;
   justify-content: center;
}
.logop{
    margin-left: 10px;
    font-family: "comic sans ms";
    font-weight: bold;
    font-size: 20px;
}
ul{
    width: 90%;
    margin: 10px auto 10px auto;
    display: flex;
    justify-content: center;
}
.choose li{ 
    width: 25%;
    text-align: center;
    float: left;
    list-style: none;
    
}
.lip{
    display: inline-block;
    padding-bottom: 5px;
    width: auto;
    color: #909399;
    font-weight: 400;
   
}
</style>
