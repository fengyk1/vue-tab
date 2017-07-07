<template>
    <div class="tabs-component">
        <ul class="clearfix">
            <li v-for="(tab,index) in tabs" >
                <a href="javascript:;" :class="{active:index == activeIndex}" @click="changeSelectedTab(index)" :style="TabString">
                    {{tab.name}}
                </a>
            </li>
        </ul>
        <div class="tabs-component-panels">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            TabString:String
        },
        data: () => ({
            tabs: [],
            activeIndex:0
        }),

        created() {
            this.tabs = this.$children;
        },

        mounted() {
            this.showTabViewContent();
        },
        methods: {
            changeSelectedTab(index){
                this.activeIndex = index;
                this.showTabViewContent();
            },
            showTabViewContent(){
                for(let i = 0;i<this.tabs.length;i++){
                    this.tabs[i].isActive = this.activeIndex == i ? true : false;
                }
                this.$emit('changeTabViewContent',this.activeIndex);
            }

        },
    };
</script>
<style scoped>
    .clearfix:after {
        content: " ";
        display: block;
        clear: both;
        height: 0;
    }
    .clearfix {
        zoom: 1;
    }
    a{
        text-decoration:none;
    }
    ul,li{
        list-style: none;
        padding:0 10px;
    }
    .tabs-component{
        width: 100%;
    }
    .tabs-component ul{
        border-bottom:solid 2px #dcdcdc;
    }
    .tabs-component li{
        float: left;
    }
    .tabs-component a{
        display: block;
        padding:16px 20px;
        position: relative;
        bottom:-2px;
        color:#595959;
    }
    .tabs-component a.active{
        border-bottom:solid 3px #44dfc1;
        color:#262626;
        font-weight: bold;
    }
</style>
