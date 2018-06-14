<template>
  <section class="container">
    <div class="">

      <v-card>
        <div class="card_content">
          <!-- <app-logo/> -->

          <div>
            <v-btn flat large color="error">登 录</v-btn>
            or
            <v-btn nuxt flat large color="blue-grey darken-2" to="/register">注 册</v-btn>
          </div>

          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              :counter="11"
              label="手机号"
              required
            ></v-text-field>
            <v-text-field
              v-model="pwd"
              :rules="pwdRules"
              :append-icon="pwdVisible ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (pwdVisible = !pwdVisible)"
              :type="pwdVisible ? 'text' : 'password'"
              :counter="20"
              label="密 码"
              hint="密码格式有误"
              min="8"
              required
            ></v-text-field>
            <br/>
            <v-btn
              block
              dark
              color="success"
              :disabled="!valid"
              @click="submit">
              登 录
            </v-btn>
          </v-form>

          <div>
            <v-btn color="success">Success</v-btn>
            <v-btn color="error">Error</v-btn>
            <v-btn color="warning">Warning</v-btn>
          </div>
        </div>
      </v-card>

    </div>
  </section>
</template>

<script>
import crypto from 'crypto'
export default {
  data: () => ({
    valid: false,
    pwdVisible: false,
    phone: '',
    phoneRules: [
      v => !!v || '手机号不能为空',
      v => /^1[3|4|5|7|8][0-9]{9}$/.test(v) || '手机号格式不正确'
    ],
    pwd: '',
    pwdRules: [
      v => !!v || '密码不能为空',
      v => /^([a-z0-9\.\@\!\#\$\%\^\&\*\(\)]){8,20}$/i.test(v) || '密码必须为6-20位字母加数字'
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        //  密码加密
        let cipher = crypto.createCipher('aes192', 'wmeimob')
        let crypted = cipher.update(this.pwd, 'utf8', 'hex')
            crypted += cipher.final('hex')

        const formData = {
          phone: this.phone,
          pwd: crypted
        }
        this.$store.dispatch('login', formData).then(() => {
          alert('登录成功')
          this.$router.push('/')
        }).catch((err) => {
          console.log('====================================')
          console.log(err)
          console.log('====================================')
        })
      }
    }
  }
}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .card_content {
    padding: 50px 40px;
  }
}
</style>
