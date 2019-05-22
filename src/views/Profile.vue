<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img :src="getImgUrl()"  class="rounded-circle">
                                        <!--<img v-lazy="'img/theme/team-3-800x800.jpg'" class="rounded-circle">-->
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                                    <base-button type="default" size="sm" class="float-right">Message</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Photos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Satashi Nakamoto
                                <span class="font-weight-light"> - 45 years old</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Dublin, Ireland</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Blockchain Enthusiast and Bitcoin Inventor</div>
                            <div><i class="ni education_hat mr-2"></i>University of Tokyo - Computer Science</div>
                        </div>

                        <hr>

                        <div>    <!-- Grid Div -->
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="name"><h5> Unique DID: </h5></label>
                                </div>
                                <div class="col-md-5">
                                    <base-input id="did" ref="didRef" type="text"></base-input>
                                </div>
                                <div class="col-md-3">

                                </div>
                            </div>
                        </div>

                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                                    <a href="#">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>

    import { Connect } from 'uport-connect'

    export default {
        data() {
            return {

            }
        },
        mounted() {
            //this.loadWeb3Provider();  -> for dynamic change via dropdown
            this.getDidInfo();
        },
        methods: {
            getDidInfo: function () {

                const uport = new Connect('MyDApp')
                let did = localStorage.getItem("did")
                this.$refs.didRef.value = did

                //Get DID from uport profile
                // uport.requestDisclosure()

                // with uport-connect v.1.0.x get an error here that requestCredentials is not a function
                /*uport.requestCredentials({
                    requested: ["name", "avatar", "country"],
                    notifications: true
                    }).then((credentials) => {
                        console.log(credentials)
                })*/

            },
            getImgUrl: function() {

                //Now get it from uport profile
                const uport = new Connect('MyDApp')
                let imgUrl;

                // uport.requestDisclosure()
                // uport.onResponse('disclosureReq').then(res => {
                    if(uport.getImgUrl) {
                        imgUrl = uport.getImgUrl
                    }
                    else {
                        imgUrl = "/img/theme/team-3-800x800.jpg";
                    }
                    return imgUrl;
               // })

                imgUrl = "/img/theme/team-3-800x800.jpg";
                return imgUrl;
            }
        }
    };
</script>
<style>
</style>
