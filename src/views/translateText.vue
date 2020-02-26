<template>
    <div class="container">
       <el-form :inline="true" :model="translateForm" class="demo-form-inline">
        <el-form-item label="翻译文本">
            <el-input v-model="translateForm.text" placeholder="输入内容"></el-input>
        </el-form-item>
        <el-form-item label="">
            <el-select v-model="translateForm.lang" placeholder="选择语言">
                <el-option label="日语" value="jb"></el-option>
                <el-option label="英语" value="en"></el-option>
                <el-option label="韩语" value="ko"></el-option>
                <el-option label="阿尔巴尼亚语" value="en"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleTranslate">翻译</el-button>
        </el-form-item>
        </el-form>
        <div class="translate-text">
            <translateOut :text='translateLang' />
        </div>
    </div>
</template>

<script>
import translateOut from './translateOut'
    export default {
        name:'translateText',
        components:{
            translateOut
        },
        data() {
            return {
                translateForm:{
                    text:'',
                    lang:''
                },
                translateLang:''
            }
        },
        methods:{
            handleTranslate() {
                let parame = {
                    key:'trnsl.1.1.20200226T202906Z.f3723de8c206c05d.c6be8515c53dcd228351d7369e120dd71f5fbc43',
                    text:this.translateForm.text,
                    lang:this.translateForm.lang
                }
                this.$axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?
                key=trnsl.1.1.20200226T202906Z.f3723de8c206c05d.c6be8515c53dcd228351d7369e120dd71f5fbc43&text=${this.translateForm.text}&lang=${this.translateForm.lang}`).then(res=>{
                    console.log('res',res);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>