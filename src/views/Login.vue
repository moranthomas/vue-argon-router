<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">

            <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">

                        <template v-if="user != null">
                            <p><strong>name:</strong> {{ user.name }}</p>
                            <button type="button" class="btn btn-secondary" v-on:click="logout">Logout</button>
                        </template>
                        <template v-else>
                            <button type="button" class="btn btn-primary" v-on:click="login">Login with uPort</button>
                        </template>

                        <template>
                            <br/>
                            <br/>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

    //import 'babel-polyfill'
    //import Vue from 'vue/dist/vue.esm.js'
    import { Connect } from 'uport-connect'

    export default {

        data: {
            user: null,
        },
        methods: {
            login: function() {
                const uport = new Connect('MyDApp')
                /*const connect = new Connect(yourAppName, {
                network: 'rinkeby'
                })*/
                //let app = this
                uport.requestDisclosure()
                //uport.requestCredentials()

                uport.onResponse('disclosureReq').then(res => {
                    const did = res.payload.did;

                    const address = uport.address;
                    const provider = uport.getProvider();
                    console.log('DID = ', did);
                    console.log('ADDRESS = ', address);
                    console.log('PROVIDER = ', provider);
                    if (uport.did) {
                        console.log('Already connected, reference docs to see data which will be available')
                        alert('Welcome Thomas! - You are now logged into the Ethereum Blockchain!')
                    } else {
                        console.log('Create a request if necessary')
                    }
                })
            },
            logout: function() {
                this.user = null
            },
        },
    };
</script>
<style>
</style>
