<template>
    <div id="editor">
        <input type="text" class="fuk" v-model="trust">
        <div class="contect">{{ trust }}</div>
    </div>
</template>

<script>
    import marked from 'marked'
    import recmark from 'recmark.vue'

    export default{
        data(){
            return{
                context:'',
                trust:''
            }
        },
        computed:{
            markdownn(){
                return marked(this.context,{sanitize:true});
            }
        },
    }
</script>

<style>
    html, #editor {
        margin: 0;
        height: 100%;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        color: #333;
    }

    .fuk, .contect {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }

    .fuk {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
    }

    code {
        color: #f66;
    }
</style>