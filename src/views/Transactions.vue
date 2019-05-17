<template>
    <div class="container">

        <h2> Account Transactions (Web3.js) </h2>
        <hr>
        <label for="name" class="col-lg-2 control-label"><h4> Node</h4></label>
        <button  @click="getNodeInfoClicked">Get Node Info</button>
        <p>Node Info :  <input class="node-input" ref="NodeInfoInputField" id="NodeInfo" type="text"> </p>
		<hr>


        <label for="name" class="col-lg-2 control-label"><h4>Balance</h4></label>
        <button ref="popAccounts" id="popAccounts" @click="populateAccountsClicked">Populate Accounts</button>

        <span>Choose Account : {{ selected }} </span><span>&nbsp;</span>
        <select id="accountsDropdown" ref="accountsDropdownRef" v-model="selected" v-on:change="onChange">
            <option v-for="(item, key) in accounts" :value="key">
                {{item}}
            </option>
        </select>
        </br>
        </br>
		<p>Selected Account : <input id="Account" ref="accountRef" type="text"> </input>
        <div>
            <p>Balance : <input id="Balance" ref="balanceRef" type="text"></p>
		    <button ref="checkBalance" id="checkBalance" @click="checkBalanceClicked">Check Balance</button>
        </div>

		<hr>
		<label for="name" class="col-lg-2 control-label"><h4>Transfer</h4></label>
		<p>From:<input id="From" type="text"> </p>
		<p>To:<input id="To" type="text"> </p>
        <p>Amount:<input id="Amount" type="text"></p>
        <button id="Transfer">Transfer</button>
        <p>Transaction Hash :<span id="Tx"></span></p>

    </div>

</template>


<script>

    import Web3 from 'web3';

    let web3;
    let web3Provider;

    export default {
        data () {
            return {
                selected: '0',
                accounts: []
            }
        },
        mounted() {
            this.loadWeb3Provider();
        },
        methods: {

            loadWeb3Provider: function () {

                const infuraUrl = "http://mainnet.infura.io/v3/53dbf207e63c42e99cacb63c2d41ec4f";
                const ganacheUrl = "http://localhost:7545";

                const local = true;
                if(local) {
                    web3Provider = new Web3.providers.HttpProvider(ganacheUrl);
                }
                else {
                    // Modern dapp browsers...
                    if (window.ethereum) {
                        web3Provider = window.ethereum;
                        try {
                            // Request account access
                            window.ethereum.enable();
                        } catch (error) {
                            // User denied account access...
                            console.error("User denied account access")
                        }
                    }
                    // Legacy dapp browsers...
                    else if (window.web3) {
                        web3Provider = window.web3.currentProvider;
                    }
                    // If no injected web3 instance is detected, fall back to Ganache
                    else {
                        web3Provider = new Web3.providers.HttpProvider(ganacheUrl);
                    }
                }

                web3 = new Web3(web3Provider);

            },
            getNodeInfoClicked: function() {
                /* Get Node Info*/
                this.$refs.NodeInfoInputField.value = web3.currentProvider.host
            },
            populateAccountsClicked: function(event) {
                let self = this       // to get around lexical scoping issue - could use another outer arrow fn instead
                web3.eth.getAccounts(function(error, accounts) {
                    if(error) {
                        console.log(error);
                    }
                    else{
                        self.accounts = accounts
                        for(var account of accounts) {
                            console.log(self.$refs.accountRef.value)
                        }
                    }
                });
            },
            checkBalanceClicked: function() {
               //Get Balance
               let balanceinEther;
               let self = this       // to get around lexical scoping issue - could use another outer arrow fn instead
               let selectedAccount = this.$refs.accountRef.value
               web3.eth.getBalance(selectedAccount).then(result => {
                    balanceinEther = web3.utils.fromWei(result, 'ether');
                    self.$refs.balanceRef.value = balanceinEther;
               });
            },
            onChange: function (event) {
                var index = event.srcElement.value;
                this.$refs.accountRef.value = event.srcElement[index].label
            }
        }
    }

</script>


<style>
body {
    background-color:#F0F0F0;
    padding: 2em;
    font-family: 'Raleway','Source Sans Pro', 'Arial';
}
.container {
    width: 50%;
    margin: 0 auto;
}

/*label{
    display: inline-block;
    float: left;
    clear: left;
    width: 250px;
    text-align: right;
}
input {
  display: inline-block;
  float: left;
}*/

label {
    display: block;
    margin-bottom:10px;
    margin-right: 20px;
    float: left;
}
input {
    padding:10px;
    width: 50%;
    margin-bottom: 1em;
}
.node-input{
    width: 70%;
}

button {
    margin: 2em 0;
    padding: 1em 4em;
    display:block;
}

#instructor {
    padding:1em;
    background-color:#fff;
    margin: 1em 0;
}
</style>