<template>
  <section class="container" style="height: 100%">
    <v-row justify="center" class="mt-12" >
      <v-form ref="form" v-model="valid" name="contact" action="/contact/thanks/" data-netlify="true" method="post" netlify-honeypot="bot-field" style="width: 400px;">
        <v-text-field class="mb-6" outlined name="名前" v-model="name"  :rules="nameRules" label="お名前" required></v-text-field>
        <v-text-field  class="mb-6" outlined name="メール" v-model="email" :rules="emailRules" label="メールアドレス" required></v-text-field>
        <v-textarea class="mb-12" outlined v-model="contents" name="contents" :rules="contentsRules" label="問い合わせ内容" required></v-textarea>

        <v-btn :disabled="!valid" color="primary" class="mr-4"><input @click="submit" type="submit" value="送信" :disabled="!valid" ></v-btn>
        <input type="hidden" name="form-name" value="contact" />
      </v-form>
    </v-row>
  </section>
</template>

<script>
    export default {
        components: {
        },
        head: {
            bodyAttrs: {
                class: 'p-contact'
            },
            title: 'お問い合わせ'
        },
        data(){
            return{
                valid: true,
                name: '',
                nameRules: [
                    v => !!v || '名前の入力は必須です',
                    v => (v && v.length <= 30) || 'お名前長くありませんか？',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'メールアドレスの入力は必須です',
                    v => /.+@.+\..+/.test(v) || 'メールアドレスの形式で入力してください',
                ],
                contents:'',
                contentsRules:[
                    v => !!v || '問い合わせ内容の入力は必須です',
                ]
            }
        },
        methods:{
            submit () {
                this.$refs.form.validate()
            },
        }
    }
</script>

<style scoped>
</style>
