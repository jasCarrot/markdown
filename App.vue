<template>
    <div id="editor">
        <input type="text" class="input" v-model="inputContent">
        <div class="output" v-html="outputContent"/>
    </div>
</template>

<script>
    import marked from 'marked';

    export default{
        data() {
            return{
                inputContent:''
            }
        },
        computed: {
            outputContent(){
                return marked(this.inputContent,{sanitize:true});
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

    .input, .output {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }

    .input {
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
